package upsert

import (
	"database/sql"
	"log"

	"amber-backend/core/db"
	"amber-backend/v2/bikemodel/model"
)

func Do(
	cooked model.Cooked,
) (
	err error,
) {
	var (
		query string
		tx *sql.Tx
	)
	tx, err = db.Db.Begin()
	if err != nil {
		return
	}

	query, err = genQuery(cooked)
	_, err = tx.Exec(query)
	if err != nil {
		log.Print(err)
		err = tx.Rollback()
		return
	}

	query, err = genQueryDeleteTag(cooked)
	_, err = tx.Exec(query)
	if err != nil {
		log.Print(err)
		err = tx.Rollback()
		return
	}

	query, err = genQueryInsertTag(cooked)
	_, err = tx.Exec(query)
	if err != nil {
		log.Print(err)
		err = tx.Rollback()
		return
	}

	// query, err = genQueryUpdateUsage(cooked)
	// _, err = tx.Exec(query)
	// if err != nil {
	// 	log.Print(err)
	// 	err = tx.Rollback()
	// 	return
	// }

	err = tx.Commit()
	if err != nil {
		log.Print(err)
		err = tx.Rollback()
		return
	}

	return
}
