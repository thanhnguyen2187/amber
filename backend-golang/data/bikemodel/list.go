package bikemodel

import (
	"amber-backend/core/db"
	"amber-backend/model"
	"github.com/doug-martin/goqu/v9"
	_ "github.com/doug-martin/goqu/v9/dialect/mysql"
)

func List(
	size int,
	page int,
	tags []string,
	orders []string,
) (
	[]model.BikeModel,
	error,
) {

	dialect := goqu.Dialect("mysql")
	d := dialect.
		Select(
			"id",
			"model_data",
			"media_files",
		).
		From("bike_model").
		Where(
			goqu.C("visibility").Eq(1),
		)
	if len(tags) > 0 {
		for _, tag := range tags {
			d = d.Where(
				goqu.C("id").In(
					dialect.
						Select("bike_model_id").
						From("bike_tag_map").
						Where(
							goqu.C("tag_key").Eq(tag),
						),
				),
			)
		}
		// d = d.Where(
		// 	goqu.
		// 		V("json_extract(model_data, \"$.type\")").
		// 		In(tags),
		// )
	}
	if len(orders) > 0 {
		for _, c := range orders {
			d = d.Order(
				goqu.C(c).Asc(),
			)
		}
	}
	d = d.Offset(uint(size * (page - 1)))
	d = d.Limit(uint(size))
	query, _, _ := d.ToSQL()
	rows, err := db.Db.Query(
		query,
	)
	if err != nil {
		return nil, err
	}

	var bikeModels = make(
		[]model.BikeModel,
		0,
	)
	for rows.Next() {
		var (
			id         int
			modelData  model.BikeModelData
			mediaFiles model.MediaFiles
		)
		err := rows.Scan(
			&id,
			&modelData,
			&mediaFiles,
		)
		if err != nil {
			return nil, err
		} else {
			modelData.NumberPlates = nil // hide information
			bikeModel := model.BikeModel{
				Id:         id,
				ModelData:  modelData,
				MediaFiles: mediaFiles,
			}
			bikeModels = append(
				bikeModels,
				bikeModel,
			)
		}
	}
	return bikeModels, nil
}
