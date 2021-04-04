package metadata

import (
	"amber-backend/core/db"
	"amber-backend/model"
	"log"
)

func QueryCoverImages(key string) model.MediaFiles {
	var coverImages = make(model.MediaFiles, 0)
	err := db.Db.QueryRow(
		"select data from static_value " +
			"where module_name = 'end_user.cover_images' " +
			"and `key` = ?",
			key,
	).Scan(&coverImages)
	if err != nil {
		log.Print(err)
	}
	return coverImages
}
