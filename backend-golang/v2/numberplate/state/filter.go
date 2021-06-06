package state

import (
	"strings"

	model2 "amber-backend/model"
)

func filter(
	numberPlates model2.NumberPlates,
	includeNumberPlate string,
) (
	filteredNumberPlates model2.NumberPlates,
) {
	filteredNumberPlates = make([]string, 0)

	for _, numberPlate := range numberPlates {
		if strings.Index(
			numberPlate,
			includeNumberPlate,
		) != -1 {
			filteredNumberPlates = append(filteredNumberPlates, numberPlate)
		}
	}

	return
}
