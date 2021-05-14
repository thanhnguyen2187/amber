package bikemodel

import (
	"amber-backend/core/db"
	"amber-backend/model/bikemodel"
)

func generateListOptionsQuery() (
	query string,
	err error,
) {
	dialect := db.Dialect()
	d := dialect.
		Select(
			"id",
			"model_data",
		).
		From("bike_model")
	query, _, err = d.ToSQL()
	return query, err
}

func ListOptions() (
	options []bikemodel.Option,
	err error,
) {
	query, err := generateListOptionsQuery()
	if err != nil {
		return nil, err
	}

	rows, err := db.Db.Query(query)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var option bikemodel.Option
		err := rows.Scan(
			&option.BikeModelId,
			&option.BikeModelData,
		)
		if err != nil {
			return nil, err
		}
		options = append(
			options,
			option,
		)
	}

	return options, nil
}
