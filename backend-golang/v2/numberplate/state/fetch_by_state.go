package state

import (
	"database/sql"
	"log"
	"strings"
	"time"

	"amber-backend/core/db"
	model2 "amber-backend/model"
	"amber-backend/v2/numberplate/model"
)

func fetchByState(
	dateStart time.Time,
	dateEnd time.Time,
	types []string,
	numberPlate string,
	bikeName string,
	state int,
	usageTypes []int,
) (
	numberPlateStates []model.NumberPlateState,
	err error,
) {
	var (
		query string
		rows  *sql.Rows
	)

	query, err = genQueryFetchByState(
		dateStart,
		dateEnd,
		types,
		// numberPlate,
		bikeName,
		state,
		usageTypes,
	)
	if err != nil {
		log.Print(err)
		return
	}

	rows, err = db.Db.Query(query)
	if err != nil {
		log.Print(err)
		return
	}

	numberPlateStates = make(
		[]model.NumberPlateState,
		0,
	)
	for rows.Next() {
		var (
			tmp        model2.NumberPlates
			bikeName   string
			contractId int
		)
		err = rows.Scan(
			&tmp,
			&bikeName,
			&contractId,
		)
		if err != nil {
			log.Print(err)
			return
		}

		for _, s := range tmp {
			if strings.Index(
				s,
				numberPlate,
			) != -1 {
				numberPlateStates = append(
					numberPlateStates,
					model.NumberPlateState{
						Value:      s,
						Label:      strings.Title(s),
						ContractId: contractId,
						BikeName: strings.Trim(
							bikeName,
							"\"",
						),
					},
				)
			}
		}
	}

	return
}
