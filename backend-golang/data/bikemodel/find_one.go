package bikemodel

import (
	"amber-backend/core/db"
	"amber-backend/model"
	"github.com/doug-martin/goqu/v9"
)

func generateGetDataQuery(
	id int,
) (
	string,
	error,
) {
	dialect := goqu.Dialect("mysql")
	d := dialect.
		Select("model_data").
		From("bike_model").
		Where(
			goqu.C("id").Eq(id),
		)
	query, _, err := d.ToSQL()

	return query, err
}

func GetData(
	id int,
) (
	model.BikeModelData,
	error,
) {
	var bikeModel = model.BikeModelData{}

	query, err := generateGetDataQuery(id)
	if err != nil {
		return bikeModel, err
	}

	row := db.Db.QueryRow(query)
	err = row.Scan(&bikeModel)
	if err != nil {
		return bikeModel, err
	}

	return bikeModel, nil
}