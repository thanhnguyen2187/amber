package contract

import (
	"amber-backend/core/db"
	"amber-backend/model"
	"amber-backend/model/contract"
	"amber-backend/model/contract/list"
	contractState "amber-backend/model/contract/state"
	"amber-backend/model/customer"
	"fmt"
	"github.com/doug-martin/goqu/v9"
)

func generateListV2Query(
	size int,
	page int,
	orders []string,
	body list.ContractBody,
	count bool,
) (
	query string,
	err error,
) {
	dialect := db.Dialect()
	var d *goqu.SelectDataset
	if count {
		d = dialect.Select(goqu.COUNT("*"))
	} else {
		d = dialect.
			Select(
				"id",
				"customer_data",
				"state",
				"contract_data",
				"total",
				"total_paid",
				"visibility",
			)
	}

	d = d.From("contract")

	if len(body.States) > 0 {
		d = d.Where(
			goqu.C("state").In(body.States),
		)
	}
	if len(body.Visibilities) > 0 {
		d = d.Where(
			goqu.C("visibility").In(body.Visibilities),
		)
	}

	if !count {
		if len(orders) > 0 {
			for _, c := range orders {
				d = d.Order(
					goqu.C(c).Asc(),
				)
			}
		}
		d = d.Offset(uint(size * (page - 1)))
		d = d.Limit(uint(size))
	}

	if len(body.VehicleUsages) > 0 {
		d = d.Where(
			goqu.V(
				dialect.
					Select(goqu.COUNT("*")).
					From("contract_map_usage").
					Where(
						goqu.C("contract_id").Eq(goqu.L("contract.id")),
						goqu.C("type").In(body.VehicleUsages),
					),
			).Gt(0),
		)
	}

	addJsonWhere := func(
		d *goqu.SelectDataset,
		jsonFieldName string,
		jsonPath string,
		value string,
	) {
		sql := fmt.Sprintf(
			"JSON_EXTRACT(%v, '%v') LIKE '%%%v%%'",
			jsonFieldName,
			jsonPath,
			value,
		)
		*d = *d.Where(
			goqu.L(sql),
		)
	}

	if body.Note != "" {
		addJsonWhere(
			d,
			"contract_data",
			"$.note",
			body.Note,
		)
	}
	if body.CustomerData.FullName != "" {
		addJsonWhere(
			d,
			"customer_data",
			"$.fullName",
			body.CustomerData.FullName,
		)
	}
	if body.CustomerData.Email != "" {
		addJsonWhere(
			d,
			"customer_data",
			"$.email",
			body.CustomerData.Email,
		)
	}
	if body.CustomerData.PhoneNumber != "" {
		addJsonWhere(
			d,
			"customer_data",
			"$.phoneNumber",
			body.CustomerData.PhoneNumber,
		)
	}
	if body.BikeData.Name != "" {
		sd := dialect.
			Select(goqu.COUNT("*")).
			From("contract_map_usage").
			Where(
				goqu.C("contract_id").Eq(goqu.L("contract.id")),
			)
		addJsonWhere(
			sd,
			"model_data",
			"$.name",
			body.BikeData.Name,
		)
		d = d.Where(
			goqu.V(sd).Gt(0),
		)
	}

	if len(body.States) == 0 ||
		len(body.VehicleUsages) == 0 ||
		len(body.Visibilities) == 0 {
		d = d.Where(
			goqu.L("false"),
		)
	}

	query, _, err = d.ToSQL()

	return query, err
}

func ListV2(
	size int,
	page int,
	orders []string,
	body list.ContractBody,
) (
	cookedContracts []contract.Cooked,
	total int,
	err error,
) {
	listQuery, err := generateListV2Query(
		size,
		page,
		orders,
		body,
		false,
	)
	cookedContracts = make(
		[]contract.Cooked,
		0,
	)

	if err != nil {
		return nil, 0, err
	}

	totalQuery, err := generateListV2Query(
		size,
		page,
		orders,
		body,
		true,
	)
	if err != nil {
		return nil, 0, err
	}

	rows, err := db.Db.Query(listQuery)
	if err != nil {
		return nil, 0, err
	}

	for rows.Next() {
		var (
			id           int
			customerData customer.Customer
			state        contractState.State
			stateDisplay string
			contractData contract.Data
			total        float64
			totalPaid    float64
			visibility   model.Visibility
		)
		err := rows.Scan(
			&id,
			&customerData,
			&state,
			&contractData,
			&total,
			&totalPaid,
			&visibility,
		)
		if err != nil {
			return nil, 0, err
		}

		switch state {
		case contractState.Created:
			stateDisplay = "Created"
			break
		case contractState.Pending:
			stateDisplay = "Pending"
			break
		case contractState.Booked:
			stateDisplay = "Booked"
			break
		case contractState.InEffect:
			stateDisplay = "In Effect"
			break
		case contractState.Overdue:
			stateDisplay = "Overdue"
			break
		}

		vehicleUsages, err := listVehicleUsages(id)
		if err != nil {
			return nil, 0, err
		}

		cookedContract := contract.Cooked{
			Id:            id,
			StateValue:    state,
			StateDisplay:  stateDisplay,
			CustomerData:  customerData,
			VehicleUsages: vehicleUsages,
			Total:         total,
			TotalPaid:     totalPaid,
			Visibility:    visibility,
		}
		cookedContracts = append(
			cookedContracts,
			cookedContract,
		)
	}

	err = db.Db.QueryRow(totalQuery).Scan(&total)
	if err != nil {
		return nil, 0, err
	}

	return cookedContracts, total, nil
}
