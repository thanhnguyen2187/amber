package contract

import (
	"log"

	"amber-backend/core/db"
)

func Fetch(
	contractId int,
) (
	contract Model,
	err error,
) {
	var (
		query string
	)

	query, err = genQuery(contractId)
	if err != nil {
		log.Print(err)
		return
	}

	err = db.Db.QueryRow(query).Scan(
		&contract.Id,
		&contract.CustomerData,
		&contract.ContractData,
		&contract.Total,
	)
	if err != nil {
		log.Print(err)
		return
	}

	return
}