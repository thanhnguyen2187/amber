package revenue

import (
	"amber-backend/core/db"
	"github.com/doug-martin/goqu/v9"
)

func genQuery(
	dateStart string,
	dateEnd string,
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
			goqu.SUM("*"),
			goqu.L("date(date_created)"),
		).
		From("contract_map_payment").
		GroupBy(
			goqu.L("date(date_created)"),
		)

	if dateStart != "" {
		ds = ds.
			Where(
				goqu.C("date_created").Gte(dateStart),
			)
	}
	if dateEnd != "" {
		ds = ds.
			Where(
				goqu.C("date_created").Lte(dateEnd),
			)
	}

	query, _, err = ds.ToSQL()

	return
}
