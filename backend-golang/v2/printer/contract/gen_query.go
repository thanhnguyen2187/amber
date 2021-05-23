package contract

import (
	"log"

	"amber-backend/core/db"
	"github.com/doug-martin/goqu/v9"
)

func genQuery(
	contractId int,
) (
	query string,
	err error,
) {
	dialect := db.Dialect()
	d := dialect.
		Select(
			"id",
			"customer_data",
			"contract_data",
			"total",
		).
		From("contract").
		Where(
			goqu.C("id").Eq(contractId),
		)
	query, _, err = d.ToSQL()
	if err != nil {
		log.Print(err)
	}
	return
}
