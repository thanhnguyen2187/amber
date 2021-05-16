package contract

import (
	contract2 "amber-backend/data/contract"
	"amber-backend/model/contract"
	"amber-backend/model/contract/state"
	"amber-backend/model/customer"
)

func UpdateDetails(
	contractId int,
	state state.State,
	customerData customer.Shrinked,
	vehicleUsages []contract.Usage,
) (
	err error,
) {
	err = contract2.UpdateDetails(
		contractId,
		state,
		customerData,
		vehicleUsages,
	)
	return
}
