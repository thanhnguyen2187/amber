package fetch

import (
	"log"

	"amber-backend/core/db"
)

func CountTotal(
) (
	total int,
	err error,
) {
	var (
		query string
	)

	query, err = genQuery(0, 0, true)
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
