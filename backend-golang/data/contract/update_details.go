package contract

import (
	"database/sql"
	"encoding/json"
	"log"
	"math"

	"amber-backend/core/date"
	"amber-backend/core/db"
	"amber-backend/core/round"
	"amber-backend/data/bikemodel"
	"amber-backend/model/contract"
	"amber-backend/model/contract/request"
	"amber-backend/model/contract/state"
	"amber-backend/model/customer"
	"github.com/doug-martin/goqu/v9"
)

func generateUpdateContractDetailsQuery(
	contractId int,
	state state.State,
	customerData customer.Shrinked,
) (
	query string,
	err error,
) {
	dialect := db.Dialect()
	b, err := json.Marshal(customerData)
	if err != nil {
		return "", err
	}

	d := dialect.
		Update("contract").
		Set(
			goqu.Record{
				"customer_data": b,
				"change_id":     goqu.L("change_id + 1"),
				"state":         state,
			},
		).
		Where(
			goqu.C("id").Eq(contractId),
		)
	query, _, err = d.ToSQL()
	return
}

func generateUpdateUsageQuery(
	contractId int,
	usage contract.Usage,
) (
	query string,
	err error,
) {
	dialect := db.Dialect()

	modelData, err := bikemodel.GetData(usage.BikeModelId)
	if err != nil {
		log.Printf(
			"Error happened getting bike model data: %v",
			err,
		)
		return "", err
	}
	modelDataBytes, err := json.Marshal(modelData)
	if err != nil {
		log.Printf(
			"Error happened marshalling bike model data: %v",
			err,
		)
		return "", err
	}

	dayCount := date.DiffInDays(
		usage.DateStart,
		usage.DateEnd,
	)
	monthCount := round.Round(
		dayCount/30,
		0.2,
		math.Ceil,
	)

	var (
		price float64
		total float64
	)
	switch usage.Type {
	case request.DailyInsideCity:
		price = float64(modelData.DailyRentalFeeInsideCity)
		total = price * dayCount * float64(usage.Amount)
		break
	case request.DailyTraveling:
		price = float64(modelData.DailyRentalFeeTraveling)
		total = price * dayCount * float64(usage.Amount)
		break
	case request.Monthly:
		price = float64(modelData.MonthlyRentalFee)
		total = round.Round(
			price*monthCount*float64(usage.Amount),
			0.5,
			math.Ceil,
		)
		break
	case request.ForSale:
		price = float64(modelData.Cost)
		total = price * float64(usage.Amount)
		break
	}

	d := dialect.
		Insert("contract_map_usage").
		Rows(
			goqu.Record{
				"contract_id": contractId,
				"type":        usage.Type,
				"model_id":    usage.BikeModelId,
				"model_data":  modelDataBytes,
				"amount":      usage.Amount,
				"day_count":   dayCount,
				"month_count": monthCount,
				"price":       price,
				"date_start":  usage.DateStart.Format("2006-01-02"),
				"date_end":    usage.DateEnd.Format("2006-01-02"),
				"total":       total,
				"change_id": goqu.V(
					dialect.
						Select("change_id").
						From("contract").
						Where(
							goqu.
								C("id").
								Eq(contractId),
						),
				),
			},
		)

	query, _, err = d.ToSQL()
	return
}

func generateUpdateContractTotalQuery(
	contractId int,
) (
	query string,
	err error,
) {
	dialect := db.Dialect()
	d := dialect.
		Update("contract").
		Set(
			goqu.Record{
				"total": goqu.V(
					dialect.
						Select(goqu.SUM("total")).
						From("contract_map_usage").
						Where(
							goqu.C("contract_id").
								Eq(goqu.L("contract.id")),
							goqu.C("change_id").
								Eq(goqu.L("contract.change_id")),
						),
				),
			},
		).
		Where(
			goqu.C("id").
				Eq(contractId),
		)

	query, _, err = d.ToSQL()
	return
}

func UpdateDetails(
	contractId int,
	state state.State,
	customerData customer.Shrinked,
	vehicleUsages []contract.Usage,
) (
	err error,
) {
	var (
		query string
		tx    *sql.Tx
	)

	tx, err = db.Db.Begin()
	if err != nil {
		return
	}

	query, err = generateUpdateContractDetailsQuery(
		contractId,
		state,
		customerData,
	)
	if err != nil {
		return
	}

	_, err = tx.Exec(query)
	if err != nil {
		_ = tx.Rollback()
		return err
	}

	for _, usage := range vehicleUsages {
		query, err = generateUpdateUsageQuery(
			contractId,
			usage,
		)
		if err != nil {
			_ = tx.Rollback()
			return
		}

		_, err = tx.Exec(query)
		if err != nil {
			_ = tx.Rollback()
			return
		}
	}

	query, err = generateUpdateContractTotalQuery(contractId)
	if err != nil {
		_ = tx.Rollback()
		return
	}

	_, err = tx.Exec(query)
	if err != nil {
		_ = tx.Rollback()
		return
	}

	err = tx.Commit()
	if err != nil {
		return err
	}

	return
}
