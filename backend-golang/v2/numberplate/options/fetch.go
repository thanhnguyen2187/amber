package options

import (
	"database/sql"
	"log"

	"amber-backend/core/db"
	model2 "amber-backend/model"
	"amber-backend/v2/numberplate/model"
)

func Fetch(
	bikeModelId int,
) (
	options []model.NumberplateOption,
	err error,
) {
	var (
		query        string
		row          *sql.Row
		numberPlates model2.NumberPlates
	)

	query, err = genQuery(bikeModelId)
	if err != nil {
		log.Print(err)
		return
	}

	row = db.Db.QueryRow(query)
	err = row.Scan(&numberPlates)
	if err != nil {
		log.Print(err)
		return
	}

	options = append(options, model.NumberplateOption{
		Label: "Unknown",
		Key:   "unknown",
	})
	for _, numberPlate := range numberPlates {
		options = append(
			options,
			model.NumberplateOption{
				Label: numberPlate,
				Key:   numberPlate,
			},
		)
	}

	return
}
