package list

import (
	"amber-backend/model"
	"amber-backend/model/contract/request"
	"amber-backend/model/contract/state"
)

type ContractBody struct {
	States       []state.State `json:"state"`
	CustomerData struct {
		FullName    string `json:"fullName"`
		Email       string `json:"email"`
		PhoneNumber string `json:"phoneNumber"`
	} `json:"customerData"`
	BikeData struct {
		Name string `json:"name"`
	} `json:"bikeData"`
	VehicleUsages []request.RentalType `json:"vehicleUsage"`
	Visibilities  []model.Visibility   `json:"visibility"`
	Note          string               `json:"note"`
}
