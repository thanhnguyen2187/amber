package contracts

import (
	"database/sql"
	"log"

	"amber-backend/core/db"
	"amber-backend/v2/statistics/model"
)

func Aggregate(
	dateStart string,
	dateEnd string,
) (
	singleSeries model.SingleSeries,
	err error,
) {
	var (
		query string
		rows *sql.Rows
		records []model.Record
	)

	query, err = genQuery(dateStart, dateEnd)
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
		records = append(records, record)
	}

	singleSeries.Name = "Contracts"
	singleSeries.Series = records

	return
}
