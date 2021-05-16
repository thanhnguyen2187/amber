package contract

import (
	"database/sql"

	"amber-backend/core/db"
	"amber-backend/model/contract"
	"github.com/doug-martin/goqu/v9"
)

func generateUsagesLogQuery(
	contractId int,
) (
	query string,
	err error,
) {
	dialect := db.Dialect()
	d := dialect.
		Select(
			"date_created",
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
			goqu.C("change_id").Neq(
				dialect.
					Select("change_id").
					From("contract").
					Where(
						goqu.C("id").Eq(contractId),
					),
			),
		)

	query, _, err = d.ToSQL()
	return
}

func ListUsagesLog(
	contractId int,
) (
	vehicleUsages []contract.Usage,
	err error,
) {
	var query string
	query, err = generateUsagesLogQuery(contractId)
	if err != nil {
		return
	}

	var rows *sql.Rows
	rows, err = db.Db.Query(query)
	if err != nil {
		return
	}

	vehicleUsages = make(
		[]contract.Usage,
		0,
	)
	for rows.Next() {
		vehicleUsage := contract.Usage{}
		err = rows.Scan(
			&vehicleUsage.DateCreated,
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
			return
		}
		vehicleUsages = append(
			vehicleUsages,
			vehicleUsage,
		)
	}

	return
}
