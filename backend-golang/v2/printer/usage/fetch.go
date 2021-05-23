package usage

import (
	contract3 "amber-backend/data/contract"
	contract2 "amber-backend/model/contract"
	"amber-backend/v2/printer/contract"
)

func Fetch(
	contract contract.Model,
) (
	usages []contract2.Usage,
	err error,
) {
	return contract3.ListVehicleUsages(
		contract.Id,
		contract.ChangeId,
	)
}
