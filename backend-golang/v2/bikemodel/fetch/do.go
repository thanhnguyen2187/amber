package fetch

import (
	"database/sql"
	"log"

	"amber-backend/core/db"
	"amber-backend/v2/bikemodel/model"
)

func Do(
	bikeName string,
	possibleUsageTypes []int,
	bikeTypes []string,
	visibilities []int,
	page int,
	size int,
) (
	cookedBikeModels []model.Cooked,
	err error,
) {
	var (
		query string
		rows  *sql.Rows
	)

	query, err = genQuery(
		bikeName,
		possibleUsageTypes,
		bikeTypes,
		visibilities,
		page,
		size,
		false,
	)
	if err != nil {
		log.Print(err)
		return
	}

	rows, err = db.Db.Query(query)
	if err != nil {
		log.Print(err)
		return
	}

	cookedBikeModels = make([]model.Cooked, 0)
	for rows.Next() {
		var cookedBikeModel model.Cooked
		err = rows.Scan(
			&cookedBikeModel.Id,
			&cookedBikeModel.ModelData,
			&cookedBikeModel.MediaFiles,
			&cookedBikeModel.Visibility,
		)
		if cookedBikeModel.ModelData.NumberPlates == nil {
			cookedBikeModel.ModelData.NumberPlates = make([]string, 0)
		}
		if err != nil {
			log.Print(err)
			return
		}
		cookedBikeModels = append(
			cookedBikeModels,
			cookedBikeModel,
		)
	}

	return
}
