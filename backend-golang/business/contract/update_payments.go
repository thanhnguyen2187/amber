package contract

import (
	"errors"

	contract2 "amber-backend/data/contract"
	"amber-backend/model/contract"
)

func UpdatePayments(
	contractId int,
	payments []contract.Payment,
) (
	err error,
) {
	for _, payment := range payments {
		if payment.Amount <= 0 {
			err = errors.New("invalid input amount for payment")
			return
		}
		if payment.ContractId != contractId {
			err = errors.New("invalid contract id for payment")
			return
		}
	}

	return contract2.UpdatePayments(contractId, payments)
}
