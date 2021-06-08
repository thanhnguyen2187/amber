package state

import (
	"amber-backend/v2/numberplate/model"
)

func Transform(
	numberPlatesSet map[string]bool,
) (
	numberPlateStates []model.NumberPlateState,
) {
	numberPlateStates = make(
		[]model.NumberPlateState,
		0,
	)
	for p, _ := range numberPlatesSet {
		var (
			label string
			value string
		)
		value = p
		if p == "unknown" {
			label = "Unknown"
		} else {
			label = p
		}

		numberPlateStates = append(
			numberPlateStates,
			model.NumberPlateState{
				Label:          label,
				Value:          value,
			},
		)
	}

	return
}
