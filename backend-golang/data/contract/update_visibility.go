package contract

import (
	"amber-backend/core/db"
	"amber-backend/model"
	"github.com/doug-martin/goqu/v9"
)

func generateUpdateVisibilityQuery(
	contractId int,
	newVisibility model.Visibility,
) (
	query string,
	err error,
) {
	dialect := db.Dialect()
	d := dialect.
		Update("contract").
		Set(
			goqu.Record{
				"visibility": newVisibility,
			},
		).
		Where(
			goqu.C("id").Eq(contractId),
		)

	query, _, err = d.ToSQL()

	return query, err
}

func UpdateVisibility(
	contractId int,
	newVisibility model.Visibility,
) (
	err error,
) {
	query, err := generateUpdateVisibilityQuery(
		contractId,
		newVisibility,
	)
	if err != nil {
		return err
	}

	_, err = db.Db.Exec(query)
	if err != nil {
		return err
	}

	return nil
}
