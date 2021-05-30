package delete

import (
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
		ds      *goqu.DeleteDataset
	)

	ds = dialect.
		Delete("bike_model").
		Where(
			goqu.C("id").Eq(bikeModelId),
		)

	query, _, err = ds.ToSQL()
	return
}
