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

	// for i := range cookedContracts {
	// 	cookedContract := &cookedContracts[i]
	// 	for j := range cookedContract.VehicleUsages {
	// 		vehicleUsage := &cookedContract.VehicleUsages[j]
	// 		if vehicleUsage.Type == request.ForSale {
	// 			vehicleUsage.DateStartDisplay = ""
	// 			vehicleUsage.DateEndDisplay = ""
	// 		}
	// 	}
	// }

	return cookedContracts, total, err
}
