package contract

import (
	contractData "amber-backend/data/contract"
	contractModel "amber-backend/model/contract"
)

func List(
	size int,
	page int,
	orders []string,
) (
	[]contractModel.Cooked,
	error,
) {
	return contractData.List(
		size,
		page,
		orders,
	)
}

func Total(
) (
	total int,
	err error,
) {
	return contractData.Total()
}
