package visibility

import (
	"amber-backend/core/db"
	"github.com/doug-martin/goqu/v9"
)

func genQuery(
	bikeModelId int,
	visibility int,
) (
	query string,
	err error,
) {
	var (
		dialect goqu.DialectWrapper
		ds      *goqu.UpdateDataset
	)

	dialect = db.Dialect()
	ds = dialect.Update("bike_model").Set(
		goqu.Record{
			"visibility": visibility,
		},
	).Where(
		goqu.C("id").Eq(bikeModelId),
	)

	query, _, err = ds.ToSQL()
	return
}
