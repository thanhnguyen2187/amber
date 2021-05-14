package contract

import (
	"amber-backend/core/db"
	"amber-backend/model/contract"
	"github.com/doug-martin/goqu/v9"
	"time"
)

func generateListPaymentQuery(
	contractId int,
// count bool,
) (
	query string,
	err error,
) {
	dialect := db.Dialect()
	var d *goqu.SelectDataset
	// if count {
	// 	d = dialect.Select(goqu.COUNT("*"))
	// } else {
	d = dialect.Select(
		"id",
		"date_created",
		"contract_id",
		"amount",
		"note",
	)
	// }
	d = d.
		From("contract_map_payment").
		Where(
			goqu.C("contract_id").Eq(contractId),
		)

	query, _, err = d.ToSQL()
	return query, err
}

func ListPayments(
	contractId int,
) (
	payments []contract.Payment,
	err error,
) {
	query, err := generateListPaymentQuery(contractId)
	if err != nil {
		return
	}

	rows, err := db.Db.Query(query)
	if err != nil {
		return
	}

	payments = make(
		[]contract.Payment,
		0,
	)
	for rows.Next() {
		// TODO: make the code cleaner by using Scan struct directly
		var (
			id          int
			dateCreated time.Time
			contractId  int
			amount      float32
			note        string
		)
		err = rows.Scan(
			&id,
			&dateCreated,
			&contractId,
			&amount,
			&note,
		)
		if err != nil {
			return
		}
		payment := contract.Payment{
			Id: id,
			DateCreated: dateCreated,
			ContractId: contractId,
			Amount: amount,
			Note: note,
		}
		payments = append(
			payments,
			payment,
		)
	}

	return
}
