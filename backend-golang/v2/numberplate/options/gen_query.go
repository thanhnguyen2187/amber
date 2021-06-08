package options

import (
	"amber-backend/core/db"
	"amber-backend/model/contract/request"
	"amber-backend/model/contract/state"
	"github.com/doug-martin/goqu/v9"
)

func genQuery(
	bikeModelId int,
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
		).
		From("bike_model").
		Where(
			goqu.C("id").Eq(bikeModelId),
		)

	query, _, err = ds.ToSQL()
	return
}

func genQueryActiveOnes(
	bikeModelId int,
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
		).
		From("contract_map_usage").
		Where(
			goqu.C("model_id").Eq(bikeModelId),
			goqu.C("change_id").Eq(
				dialect.
					Select("change_id").
					From("contract").
					Where(
						goqu.L("contract.id").Eq(goqu.L("contract_id")),
						goqu.Or(
							goqu.And(
								goqu.L("contract_map_usage.type").In(
									[]int{
										request.DailyInsideCity,
										request.DailyTraveling,
										request.Monthly,
									},
								),
								goqu.L("contract.state").In(
									[]int{
										state.Booked,
										state.InEffect,
										state.Overdue,
									},
								),
							),
							goqu.And(
								goqu.L("contract_map_usage.type").Eq(request.ForSale),
								goqu.L("contract.state").In(
									[]int{
										state.Booked,
										state.InEffect,
										state.Finished,
										state.Overdue,
									},
								),
							),
						),
					),
			),
		)

	query, _, err = ds.ToSQL()
	return
}
