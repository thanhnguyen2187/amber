package fetch

import (
	"log"

	"amber-backend/core/db"
)

func CountTotal(
	bikeName string,
	possibleUsageTypes []int,
	bikeTypes []string,
	visibilities []int,
) (
	total int,
	err error,
) {
	var (
		query string
	)

	query, err = genQuery(
		bikeName,
		possibleUsageTypes,
		bikeTypes,
		visibilities,
		0,
		0,
		true,
	)
	if err != nil {
		log.Print(err)
		return
	}

	err = db.Db.QueryRow(query).Scan(&total)
	if err != nil {
		log.Print(err)
		return
	}

	return
}
