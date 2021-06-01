package check

import (
	"amber-backend/core/db"
	"amber-backend/model/contract/state"
	"github.com/doug-martin/goqu/v9"
)

func genQueryFetchAll() (
	query string,
	err error,
) {
	var (
		dialect goqu.DialectWrapper
		ds      *goqu.SelectDataset
	)
	dialect = db.Dialect()
	ds = dialect.
		Select(
			"number_plates",
		).
		From("contract_map_usage").
		Where(
			goqu.C("change_id").Eq(
				goqu.V(
					dialect.
						Select("change_id").
						From("contract").
						Where(
							goqu.C("id").Eq("contract_map_usage.contract_id"),
							goqu.C("state").Eq(state.InEffect),
						),
				),
			),
		)

	query, _, err = ds.ToSQL()
	return
}
