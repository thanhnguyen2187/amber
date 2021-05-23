package upsert

import (
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
	)
	query, err = genQuery(cooked)

	_, err = db.Db.Exec(query)
	if err != nil {
		return
	}

	return
}
