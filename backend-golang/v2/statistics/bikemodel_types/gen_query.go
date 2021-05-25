package bikemodel_types

import (
	"amber-backend/core/db"
	"github.com/doug-martin/goqu/v9"
)

func genQuery() (
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
			goqu.COUNT("*"),
			goqu.L("json_extract(model_data, \"$.type\")"),
		).
		From("bike_model").
		GroupBy(
			goqu.L("json_extract(model_data, \"$.type\")"),
		)
	query, _, err = ds.ToSQL()

	return
}
