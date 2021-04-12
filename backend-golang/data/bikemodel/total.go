package bikemodel

import (
	"amber-backend/core/db"
	"github.com/doug-martin/goqu/v9"
	_ "github.com/doug-martin/goqu/v9/dialect/mysql"
)

func Total(
	tags []string,
) (int, error) {

	dialect := goqu.Dialect("mysql")
	d := dialect.
		Select(goqu.COUNT("*")).
		From("bike_model")
	if len(tags) > 0 {
		d = d.Where(
			goqu.C("id").In(
				dialect.
					Select("bike_model_id").
					From("bike_tag_map").
					Where(
						goqu.C("tag_key").In(tags),
					).
					Distinct(),
			),
		)
	}
	query, _, _ := d.ToSQL()
	total := 0
	err := db.Db.QueryRow(
		query,
	).Scan(&total)
	if err != nil {
		return 0, err
	} else {
		return total, nil
	}
}
