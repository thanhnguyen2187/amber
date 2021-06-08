package state

import (
	"database/sql"
	"log"
	"strings"

	"amber-backend/core/db"
	model2 "amber-backend/model"
	"amber-backend/v2/numberplate/model"
)

func fetchAllNumberPlates(
	types []string,
	includingNumberPlate string,
	bikeName string,
) (
	numberPlateStatesAll []model.NumberPlateState,
	err error,
) {
	var (
		query string
		rows  *sql.Rows
	)

	query, err = genQueryFetchAll(
		types,
		bikeName,
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

	numberPlateStatesAll = make(
		[]model.NumberPlateState,
		0,
	)
	for rows.Next() {
		var (
			tmp      model2.NumberPlates
			bikeName string
		)
		err = rows.Scan(
			&tmp,
			&bikeName,
		)
		if err != nil {
			log.Print(err)
			return
		}

		for _, s := range tmp {
			if strings.Index(
				s,
				includingNumberPlate,
			) != -1 {
				numberPlateStatesAll = append(
					numberPlateStatesAll,
					model.NumberPlateState{
						Value:      s,
						Label:      strings.Title(s),
						ContractId: 0,
						BikeName:   strings.Trim(
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
