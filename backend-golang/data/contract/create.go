package contract

import (
	"amber-backend/core/db"
	"amber-backend/model/contract"
	"amber-backend/model/contract/request"
	"amber-backend/model/contract/state"
	"amber-backend/model/customer"
	"encoding/json"
	"github.com/doug-martin/goqu/v9"
	_ "github.com/doug-martin/goqu/v9/dialect/mysql"
)

func generateCreateQuery(
	fullName string,
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
				"state":         state.Created,
			},
		)
	query, _, err := d.ToSQL()
	return query,
		err
}

func CreateFromBody(
	body request.Body,
) (
	error,
) {
	query, err := generateCreateQuery(
		body.FullName,
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

	_, err = tx.Exec(query)
	if err != nil {
		_ = tx.Rollback()
		return err
	}
	// log.Printf("Executed query %s", query)

	err = tx.Commit()
	if err != nil {
		return err
	}
	// log.Printf("Committed query %s", query)

	return nil
}
