package fetch

import (
	"log"

	"amber-backend/core/db"
	"github.com/doug-martin/goqu/v9"
)

func genQuery(
	page int,
	size int,
	count bool,
) (
	query string,
	err error,
) {
	var (
		d *goqu.SelectDataset
		dialect goqu.DialectWrapper
	)
	dialect = db.Dialect()
	if count {
		d = dialect.Select(goqu.COUNT("*"))
	} else {
		d = dialect.Select(
			"id",
			"model_data",
			"media_files",
		)
		d = d.Offset(uint(size * (page - 1)))
		d = d.Limit(uint(size))
	}

	d = d.From("bike_model")

	query, _, err = d.ToSQL()
	if err != nil {
		log.Print(err)
		return
	}

	return
}
