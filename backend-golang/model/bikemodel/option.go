package bikemodel

import (
	"amber-backend/model"
)

type Option struct {
	BikeModelId   int                 `json:"bikeModelId"`
	BikeModelData model.BikeModelData `json:"bikeModelData"`
}
