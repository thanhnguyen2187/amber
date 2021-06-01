package options

import (
	"amber-backend/core/db"
	"github.com/doug-martin/goqu/v9"
)

func genQuery(
	bikeModelId int,
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
			goqu.L("json_extract(model_data, '$.numberPlates')"),
		).
		From("bike_model").
		Where(
			goqu.C("id").Eq(bikeModelId),
		)

	query, _, err = ds.ToSQL()
	return
}
