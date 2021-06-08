package fetchone

import (
	"database/sql"
	"log"

	"amber-backend/core/db"
	contract2 "amber-backend/data/contract"
	"amber-backend/model/contract"
	state2 "amber-backend/model/contract/state"
)

func FetchOne(
	contractId int,
) (
	cookedContract contract.Cooked,
	err error,
) {
	var (
		query string
		row *sql.Row
		changeId int
	)

	query, err = genQuery(contractId)
	if err != nil {
		log.Print(err)
		return
	}

	row = db.Db.QueryRow(query)
	err = row.Scan(
		&cookedContract.Id,
		&cookedContract.CustomerData,
		&cookedContract.StateValue,
		&cookedContract.ContractData,
		&cookedContract.Total,
		&cookedContract.TotalPaid,
		&cookedContract.Visibility,
		&changeId,
	)
	if err != nil {
		log.Print(err)
		return
	}

	switch cookedContract.StateValue {
	case state2.Created:
		cookedContract.StateDisplay = "Created"
		break
	case state2.Pending:
		cookedContract.StateDisplay = "Pending"
		break
	case state2.Booked:
		cookedContract.StateDisplay = "Booked"
		break
	case state2.InEffect:
		cookedContract.StateDisplay = "In Effect"
		break
	case state2.Finished:
		cookedContract.StateDisplay = "Finished"
		break
	case state2.Overdue:
		cookedContract.StateDisplay = "Overdue"
		break
	}

	cookedContract.VehicleUsages, err = contract2.ListVehicleUsages(
		contractId,
		changeId,
	)
	if err != nil {
		log.Print(err)
		return
	}

	return
}
