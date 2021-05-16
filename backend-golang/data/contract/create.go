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
	_ "github.com/doug-martin/goqu/v9/dialect/mysql"
)

func generateCreateQuery(
	fullName string,
	email string,
	phoneNumber string,
	note string,
) (
	string,
	error,
) {
	dialect := goqu.Dialect("mysql")
	customerData, _ := json.Marshal(
		customer.Customer{
			FullName:    fullName,
			Email:       email,
			PhoneNumber: phoneNumber,
		},
	)
	contractData, _ := json.Marshal(
		contract.Data{
			Deposit:   "None",
			Equipment: "None",
			Note:      note,
		},
	)
	d := dialect.
		Insert("contract").
		Rows(
			goqu.Record{
				"customer_data": customerData,
				"contract_data": contractData,
				"state":         state.Pending,
			},
		)
	query, _, err := d.ToSQL()
	return query,
		err
}

func generateMapUsageQuery(
	rentals []request.Rental,
	contractId int64,
) (
	string,
	float64,
	error,
) {
	if len(rentals) == 0 {
		return "", 0, nil
	}

	dialect := goqu.Dialect("mysql")
	d := dialect.
		Insert("contract_map_usage")
	records := make(
		[]goqu.Record,
		0,
	)

	var total float64

	for _, rental := range rentals {
		modelData, err := bikemodel.GetData(rental.BikeModelId)
		if err != nil {
			log.Printf("Error happened getting bike model data: %v", err)
			return "", 0, err
		}
		modelDataBytes, err := json.Marshal(modelData)
		if err != nil {
			log.Printf("Error happened marshalling bike model data: %v", err)
			return "", 0, err
		}

		dayCount := date.DiffInDays(rental.DateStart, rental.DateEnd)
		monthCount := round.Round(
			dayCount/30,
			0.2,
			math.Ceil,
		)
		var (
			subTotal float64
			price    float64
		)
		switch rental.Type {
		case request.DailyInsideCity:
			price = float64(modelData.DailyRentalFeeInsideCity)
			subTotal = price * dayCount * float64(rental.Amount)
			break
		case request.DailyTraveling:
			price = float64(modelData.DailyRentalFeeTraveling)
			subTotal = price * dayCount * float64(rental.Amount)
			break
		case request.Monthly:
			price = float64(modelData.MonthlyRentalFee)
			subTotal = round.Round(
				price*monthCount*float64(rental.Amount),
				0.5,
				math.Ceil,
			)
			break
		case request.ForSale:
			price = float64(modelData.Cost)
			subTotal = price * float64(rental.Amount)
			break
		}

		records = append(
			records,
			goqu.Record{
				"contract_id": contractId,
				"type":        rental.Type,
				"model_id":    rental.BikeModelId,
				"model_data":  modelDataBytes,
				"amount":      rental.Amount,
				"day_count":   dayCount,
				"month_count": monthCount,
				"price":       price,
				"date_start":  rental.DateStart,
				"date_end":    rental.DateEnd,
				"total":       subTotal,
			},
		)
		total += subTotal
	}
	d = d.Rows(records)
	query, _, err := d.ToSQL()
	return query,
		total,
		err
}

func generateUpdateTotal(
	contractId int64,
	total float64,
) (
	string,
	error,
) {
	dialect := goqu.Dialect("mysql")
	d := dialect.Update("contract").Set(
		goqu.Record{
			"total": total,
		},
	).Where(
		goqu.Ex{
			// id = [contractId]
			"id": goqu.Op{"eq": contractId},
		},
	)
	query, _, err := d.ToSQL()
	if err != nil {
		return "", err
	}

	return query, err
}

func CreateContractMapUsage(
	tx *sql.Tx,
	rentals []request.Rental,
	contractId int64,
) (
	float64,
	error,
) {
	query, total, err := generateMapUsageQuery(
		rentals,
		contractId,
	)
	// log.Printf("Generated query: %s", query)
	if query != "" {
		_, err = tx.Exec(query)
	}
	if err != nil {
		return 0, err
	}
	// log.Printf("Executed query: %s", query)

	return total, nil
}

func CreateFromBody(
	body request.Body,
) (
	error,
) {
	query, err := generateCreateQuery(
		body.FullName,
		body.Email,
		body.PhoneNumber,
		body.Note,
	)
	if err != nil {
		return err
	}
	// log.Printf("Generated query: %s", query)

	tx, err := db.Db.Begin()
	if err != nil {
		return err
	}

	res, err := tx.Exec(query)
	if err != nil {
		_ = tx.Rollback()
		return err
	}
	// log.Printf("Executed query: %s", query)

	contractId, err := res.LastInsertId()
	total := float64(0)
	if err != nil {
		_ = tx.Rollback()
		return err
	}

	subTotal, err := CreateContractMapUsage(
		tx,
		body.Requests.RentalsDailyInsideCity,
		contractId,
	)
	if err != nil {
		_ = tx.Rollback()
		return err
	}
	total += subTotal

	subTotal, err = CreateContractMapUsage(
		tx,
		body.Requests.RentalsDailyTraveling,
		contractId,
	)
	if err != nil {
		_ = tx.Rollback()
		return err
	}
	total += subTotal

	subTotal, err = CreateContractMapUsage(
		tx,
		body.Requests.RentalsMonthly,
		contractId,
	)
	if err != nil {
		_ = tx.Rollback()
		return err
	}
	total += subTotal

	subTotal, err = CreateContractMapUsage(
		tx,
		body.Requests.Sales,
		contractId,
	)
	if err != nil {
		_ = tx.Rollback()
		return err
	}
	total += subTotal
	// TODO: REMOVE THE DUPLICATION BY USING A SIMPLE CONCATENATE

	updateTotalQuery, err := generateUpdateTotal(contractId, total)
	if err != nil {
		return err
	}

	_, err = tx.Exec(updateTotalQuery)
	if err != nil {
		return err
	}

	err = tx.Commit()
	if err != nil {
		return err
	}
	// log.Printf("Committed query %s", query)

	return nil
}
