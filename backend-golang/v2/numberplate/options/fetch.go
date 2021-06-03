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
		query                string
		row                  *sql.Row
		rows                 *sql.Rows
		numberPlates         model2.NumberPlates
		numberPlatesInEffect = make(map[string]bool)
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

	query, err = genQueryActiveOnes(bikeModelId)
	if err != nil {
		log.Print(err)
		return
	}

	rows, err = db.Db.Query(query)
	if err != nil {
		log.Print(err)
		return
	}

	for rows.Next() {
		var tmp model2.NumberPlates
		err = rows.Scan(&tmp)

		for _, numberPlate := range tmp {
			numberPlatesInEffect[numberPlate] = true
		}
	}

	options = append(options, model.NumberplateOption{
		Label: "Unknown",
		Key:   "unknown",
	})
	for _, numberPlate := range numberPlates {
		_, ok := numberPlatesInEffect[numberPlate]
		if !ok {
			options = append(
				options,
				model.NumberplateOption{
					Label: numberPlate,
					Key:   numberPlate,
				},
			)
		}
	}

	return
}
