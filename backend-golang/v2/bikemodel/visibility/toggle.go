package visibility

import (
	"log"

	"amber-backend/core/db"
)

func Toggle(
	bikeModelId int,
	visibility int,
) (
	err error,
) {
	var (
		query string
	)

	query, err = genQuery(bikeModelId, visibility)
	if err != nil {
		log.Print(err)
		return
	}

	_, err = db.Db.Exec(query)
	if err != nil {
		log.Print(err)
		return
	}

	return
}
