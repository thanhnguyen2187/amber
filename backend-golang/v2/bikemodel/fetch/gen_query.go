package fetch

import (
	"fmt"
	"log"
	"strings"

	"amber-backend/core/db"
	"github.com/doug-martin/goqu/v9"
)

func genQuery(
	bikeName string,
	possibleUsageTypes []int,
	bikeTypes []string,
	visibilities []int,
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
			"visibility",
		)
		d = d.Offset(uint(size * (page - 1)))
		d = d.Limit(uint(size))
	}

	if bikeName != "" {
		d = d.Where(
			goqu.L(
				"lower(json_value(model_data, '$.name'))",
			).Like("%"+ strings.ToLower(bikeName) +"%"),
		)
	}
	if len(bikeTypes) > 0 {
		d = d.Where(
			goqu.L(
				"json_value(model_data, '$.type')",
			).In(bikeTypes),
		)
	}
	if len(possibleUsageTypes) > 0 {
		orClause := goqu.Or()
		for _, usageType := range possibleUsageTypes {
			orClause = orClause.Append(
				goqu.L(
					fmt.Sprintf("json_contains(model_data, %v, '$.possibleUsageTypes')", usageType),
				),
			)
		}
		d = d.Where(orClause)
	}
	if len(visibilities) > 0 {
		d = d.Where(
			goqu.C("visibility").In(visibilities),
		)
	}

	if len(visibilities) == 0 {
		d = d.Where(
			goqu.L("false"),
		)
	}

	d = d.From("bike_model")

	query, _, err = d.ToSQL()
	if err != nil {
		log.Print(err)
		return
	}

	return
}
