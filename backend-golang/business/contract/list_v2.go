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
	[]contractModel.Cooked,
	int,
	error,
) {
	return contractData.ListV2(
		size,
		page,
		orders,
		body,
	)
}
