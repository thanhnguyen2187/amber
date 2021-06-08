package fetchone

import (
	"amber-backend/core/db"
	"github.com/doug-martin/goqu/v9"
)

func genQuery(
	contractId int,
) (
	query string,
	err error,
) {
	var (
		dialect goqu.DialectWrapper
		ds      *goqu.SelectDataset
	)

	dialect = db.Dialect()
	ds = dialect.
		Select(
			"id",
			"customer_data",
			"state",
			"contract_data",
			"total",
			"total_paid",
			"visibility",
			"change_id",
		).
		From("contract").
		Where(
			goqu.C("id").Eq(contractId),
		)

	query, _, err = ds.ToSQL()
	return
}
