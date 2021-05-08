package contract

import (
	"amber-backend/data/contract"
	"amber-backend/model"
	"errors"
)

func UpdateVisibility(
	contractId int,
	newVisibility model.Visibility,
) (
	err error,
) {
	if newVisibility != model.Visible &&
		newVisibility != model.Hidden {
		return errors.New("invalid visibility")
	}

	return contract.UpdateVisibility(
		contractId,
		newVisibility,
	)
}
