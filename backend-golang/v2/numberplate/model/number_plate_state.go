package model

import (
	"amber-backend/model/contract"
)

type NumberPlateState struct {
	Label          string          `json:"label"`
	Value          string          `json:"value"`
	CookedContract contract.Cooked `json:"cookedContract"`
	BikeName       string          `json:"bikeName"`
}
