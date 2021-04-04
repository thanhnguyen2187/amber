package bikemodel

import (
	"amber-backend/data/bikemodel"
	"amber-backend/model"
)

func List(
	size int,
	page int,
	tags []string,
	orders []string,
) (
	[]model.BikeModel,
	int,
	error,
) {
	bikeModels, err := bikemodel.List(
		size,
		page,
		tags,
		orders,
	)
	if err != nil {
		return nil, 0, err
	}
	total, err := bikemodel.Total(
		tags,
	)
	if err != nil {
		return nil, 0, err
	}

	return bikeModels, total, nil
}
