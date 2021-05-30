package model

import (
	"amber-backend/model"
)

type Cooked struct {
	Id         int                 `json:"id"`
	ModelData  model.BikeModelData `json:"modelData"`
	MediaFiles model.MediaFiles    `json:"mediaFiles"`
	Visibility int                 `json:"visibility"`
}
