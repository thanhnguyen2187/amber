package check

import (
	"database/sql"
	"errors"
	"log"

	"amber-backend/core/db"
	"amber-backend/model"
)

func Do(
	numberPlates model.NumberPlates,
) (
	unique bool,
	err error,
) {
	var (
		query string
		allNumberPlates map[string]bool
		rows *sql.Rows
	)
	
	query, err = genQueryFetchAll()
	if err != nil {
		log.Print(err)
		return
	}

	rows, err = db.Db.Query(query)
	if err != nil {
		log.Print(err)
		return
	}

	allNumberPlates = make(map[string]bool)
	for rows.Next() {
		var tmp model.NumberPlates

		err = rows.Scan(&tmp)
		if err != nil {
			log.Print(err)
			return
		}

		for _, numberPlate := range tmp {
			if _, ok := allNumberPlates[numberPlate]; ok {
				err = errors.New("duplicated number plate between two bike models")
				return
			}
			allNumberPlates[numberPlate] = true
		}
	}

	for _, numberPlate := range numberPlates {
		if _, ok := allNumberPlates[numberPlate]; ok {
			unique = false
			return
		}
	}

	unique = true
	return
}
