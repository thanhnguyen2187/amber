package contract

import (
	"amber-backend/core/db"
	"amber-backend/model"
	"amber-backend/model/contract"
	"amber-backend/model/contract/request"
	contractState "amber-backend/model/contract/state"
	"amber-backend/model/customer"
	"github.com/doug-martin/goqu/v9"
	_ "github.com/doug-martin/goqu/v9/dialect/mysql"
)

func generateListQuery(
	size int,
	page int,
	orders []string,
) (
	query string,
	err error,
) {
	dialect := goqu.Dialect("mysql")
	d := dialect.
		Select(
			"id",
			"customer_data",
			"state",
			"contract_data",
			"total",
			"total_paid",
		).
		From("contract")
	if len(orders) > 0 {
		for _, c := range orders {
			d = d.Order(
				goqu.C(c).Asc(),
			)
		}
	}
	d = d.Offset(uint(size * (page - 1)))
	d = d.Limit(uint(size))

	query, _, err = d.ToSQL()

	return query, nil
}

func generateCountQuery(
) (
	query string,
	err error,
) {
	dialect := goqu.Dialect("mysql")
	d := dialect.
		Select(goqu.COUNT("*")).
		From("contract")
	query, _, err = d.ToSQL()

	return query, err
}

func generateVehicleUsagesQuery(
	contractId int,
) (
	query string,
	err error,
) {
	dialect := goqu.Dialect("mysql")
	d := dialect.
		Select(
			"id",
			"contract_id",
			"type",
			"model_id",
			"model_data",
			"amount",
			"day_count",
			"month_count",
			"price",
			"date_start",
			"date_end",
			"total",
		).
		From("contract_map_usage").
		Where(
			goqu.C("contract_id").Eq(contractId),
			goqu.C("visibility").Eq(model.Visible),
		)

	query, _, err = d.ToSQL()
	if err != nil {
		return "", err
	}

	return query, nil
}

func listVehicleUsages(
	contractId int,
) (
	vehicleUsages []contract.Usage,
	err error,
) {
	query, err := generateVehicleUsagesQuery(contractId)
	if err != nil {
		return nil, err
	}

	rows, err := db.Db.Query(query)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		vehicleUsage := contract.Usage{}

		err := rows.Scan(
			&vehicleUsage.UsageId,
			&vehicleUsage.ContractId,
			&vehicleUsage.Type,
			&vehicleUsage.BikeModelId,
			&vehicleUsage.BikeModelData,
			&vehicleUsage.Amount,
			&vehicleUsage.DayCount,
			&vehicleUsage.MonthCount,
			&vehicleUsage.Price,
			&vehicleUsage.DateStart,
			&vehicleUsage.DateEnd,
			&vehicleUsage.Total,
		)
		if err != nil {
			return nil, err
		}

		vehicleUsage.DateStartDisplay = vehicleUsage.DateStart.Format("2006-01-02")
		vehicleUsage.DateEndDisplay = vehicleUsage.DateEnd.Format("2006-01-02")

		switch vehicleUsage.Type {
		case request.DailyInsideCity:
			vehicleUsage.TypeDisplay = "Daily Rental Inside City"
			break
		case request.DailyTraveling:
			vehicleUsage.TypeDisplay = "Daily Rental Traveling"
			break
		case request.Monthly:
			vehicleUsage.TypeDisplay = "Monthly Rental"
			break
		case request.ForSale:
			vehicleUsage.TypeDisplay = "For Sale"
			break
		}

		vehicleUsages = append(
			vehicleUsages,
			vehicleUsage,
		)
	}

	return vehicleUsages, nil
}

func Total(
) (
	total int,
	err error,
) {
	query, err := generateCountQuery()
	if err != nil {
		return 0, err
	}

	row := db.Db.QueryRow(query)
	err = row.Scan(&total)
	if err != nil {
		return 0, err
	}

	return total, nil
}

func List(
	size int,
	page int,
	orders []string,
) (
	[]contract.Cooked,
	error,
) {
	query, err := generateListQuery(
		size,
		page,
		orders,
	)
	if err != nil {
		return nil, err
	}

	rows, err := db.Db.Query(query)
	if err != nil {
		return nil, err
	}

	var cookedContracts = make(
		[]contract.Cooked,
		0,
	)
	for rows.Next() {
		var (
			id           int
			customerData customer.Customer
			state        contractState.State
			stateDisplay string
			contractData contract.Data
			total        float64
			totalPaid    float64
		)
		err := rows.Scan(
			&id,
			&customerData,
			&state,
			&contractData,
			&total,
			&totalPaid,
		)
		if err != nil {
			return nil, err
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
			return nil, err
		}

		cookedContract := contract.Cooked{
			Id:            id,
			StateValue:    state,
			StateDisplay:  stateDisplay,
			CustomerData:  customerData,
			VehicleUsages: vehicleUsages,
			Total:         total,
			TotalPaid:     totalPaid,
		}
		cookedContracts = append(
			cookedContracts,
			cookedContract,
		)
	}

	return cookedContracts, nil
}
