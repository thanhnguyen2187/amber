package bikemodel

import (
	bikemodelData "amber-backend/data/bikemodel"
	"amber-backend/model/bikemodel"
)

func ListOptions() (
	options []bikemodel.Option,
	err error,
) {
	return bikemodelData.ListOptions()
}
