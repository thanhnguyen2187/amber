package contract

import (
	"amber-backend/core/db"
	"amber-backend/model/contract"
	"github.com/doug-martin/goqu/v9"
)

func generateUpdateContractTotalPaidQuery(
	contractId int,
) (
	query string,
	err error,
) {
	dialect := db.Dialect()
	d := dialect.
		Update("contract").
		Set(
			goqu.Record{
				"total_paid": goqu.V(
					dialect.
						Select(goqu.SUM("amount")).
						From("contract_map_payment").
						Where(
							goqu.C("contract_id").
								Eq(contractId),
						),
				),
			},
		).Where(
		goqu.C("id").Eq(contractId),
	)

	query, _, err = d.ToSQL()
	return
}

func generateUpdatePaymentQuery(
	contractId int,
	payment contract.Payment,
) (
	query string,
	err error,
) {
	dialect := db.Dialect()
	d := dialect.
		Insert("contract_map_payment").
		Rows(
			goqu.Record{
				"contract_id": contractId,
				"amount":      payment.Amount,
				"note":        payment.Note,
			},
		)
	query, _, err = d.ToSQL()
	return
}

func UpdatePayments(
	contractId int,
	payments []contract.Payment,
) (
	err error,
) {
	tx, err := db.Db.Begin()
	if err != nil {
		return err
	}

	for _, payment := range payments {
		query, err := generateUpdatePaymentQuery(
			contractId,
			payment,
		)
		if err != nil {
			return err
		}

		_, err = tx.Exec(query)
		if err != nil {
			_ = tx.Rollback()
			return err
		}
	}

	query, err := generateUpdateContractTotalPaidQuery(contractId)
	_, err = tx.Exec(query)
	if err != nil {
		_ = tx.Rollback()
		return err
	}

	err = tx.Commit()
	if err != nil {
		_ = tx.Rollback()
		return err
	}

	return err
}
