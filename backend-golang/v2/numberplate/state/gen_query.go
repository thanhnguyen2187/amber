package state

import (
	"strings"
	"time"

	"amber-backend/core/date"
	"amber-backend/core/db"
	"github.com/doug-martin/goqu/v9"
)

func genQueryFetchAll(
	types []string,
	bikeName string,
) (
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
			goqu.L("json_extract(model_data, '$.numberPlates')"),
			goqu.L("json_extract(model_data, '$.name')"),
		).
		From("bike_model")

	if len(types) > 0 {
		orClause := goqu.Or()
		for _, s := range types {
			orClause = orClause.Append(
				goqu.L("json_extract(model_data, '$.type')").Eq(s),
			)
		}
		ds = ds.Where(orClause)
	}

	if bikeName != "" {
		ds = ds.Where(
			goqu.
				L("lower(json_value(model_data, '$.name'))").
				Like("%" + strings.ToLower(bikeName) + "%"),
		)
	}

	query, _, err = ds.ToSQL()
	return
}

func genQueryFetchByState(
	dateStart time.Time,
	dateEnd time.Time,
	types []string,
	// numberPlate string,
	bikeName string,
	state int,
) (
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
			goqu.L("json_extract(model_data, '$.name')"),
		).
		From("contract_map_usage").
		Where(
			goqu.C("change_id").Eq(
				dialect.
					Select("change_id").
					From("contract").
					Where(
						goqu.L("contract.id").Eq(goqu.L("contract_id")),
						goqu.C("state").Eq(state),
					),
			),
		)

	orClauseDates := goqu.Or()
	if !date.IsZero(dateStart) {
		orClauseDates = orClauseDates.Append(
			goqu.C("date_end").Gte(
				goqu.L(dateStart.Format("2006-01-02")),
			),
		)
	}

	if !date.IsZero(dateEnd) {
		orClauseDates = orClauseDates.Append(
			goqu.C("date_start").Lte(
				goqu.L(dateEnd.Format("2006-01-02")),
			),
		)
	}
	ds = ds.Where(orClauseDates)

	if len(types) > 0 {
		orClause := goqu.Or()
		for _, s := range types {
			orClause = orClause.Append(
				goqu.L("json_extract(model_data, '$.type')").Eq(s),
			)
		}
		ds = ds.Where(orClause)
	}

	if bikeName != "" {
		ds = ds.Where(
			goqu.
				L("lower(json_value(model_data, '$.name'))").
				Like("%" + strings.ToLower(bikeName) + "%"),
		)
	}

	query, _, err = ds.ToSQL()
	return
}
