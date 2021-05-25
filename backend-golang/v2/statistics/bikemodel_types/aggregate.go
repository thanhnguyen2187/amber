package bikemodel_types

import (
	"database/sql"
	"log"
	"strings"

	"amber-backend/core/db"
	"amber-backend/v2/statistics/model"
)

func Aggregate() (
	records []model.Record,
	err error,
) {
	var (
		query string
		rows *sql.Rows
	)

	query, err = genQuery()
	if err != nil {
		log.Print(err)
		return
	}

	rows, err = db.Db.Query(query)
	if err != nil {
		log.Print(err)
		return
	}

	records = make([]model.Record, 0)
	for rows.Next() {
		var record model.Record
		err = rows.Scan(&record.Value, &record.Name)
		if err != nil {
			log.Print(err)
			return
		}
		record.Name = strings.TrimSuffix(record.Name, "\"")
		record.Name = strings.TrimPrefix(record.Name, "\"")
		records = append(records, record)
	}

	return
}
