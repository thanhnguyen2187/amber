package contract

import (
	contractData "amber-backend/data/contract"
	contractModel "amber-backend/model/contract"
	"amber-backend/model/contract/list"
)

func ListV2(
	size int,
	page int,
	orders []string,
	body list.ContractBody,
) (
	cookedContracts []contractModel.Cooked,
	total int,
	err error,
) {
	cookedContracts, total, err = contractData.ListV2(
		size,
		page,
		orders,
		body,
	)
	return cookedContracts, total, err
}
