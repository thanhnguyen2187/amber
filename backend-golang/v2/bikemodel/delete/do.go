package delete

import (
	"log"

	"amber-backend/core/db"
)

func Do(
	bikeModelId int,
) (
	err error,
) {
	var (
		query string
	)

	query, err = genQuery(bikeModelId)
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
