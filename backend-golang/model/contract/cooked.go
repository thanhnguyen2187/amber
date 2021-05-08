package contract

import (
	"amber-backend/model"
	"amber-backend/model/contract/request"
	contractState "amber-backend/model/contract/state"
	"amber-backend/model/customer"
	"encoding/json"
	"errors"
)

type Usage struct {
	Type          request.RentalType  `json:"type"`
	BikeModelData model.BikeModelData `json:"bikeModelData"`
	Amount        int                 `json:"amount"`
	TypeDisplay   string              `json:"typeDisplay"`
	DayCount      float64             `json:"dayCount"`
	MonthCount    float64             `json:"monthCount"`
	Price         float64             `json:"price"`
	DateStart     string              `json:"dateStart"`
	DateEnd       string              `json:"dateEnd"`
	Total         float64             `json:"total"`
}

type Cooked struct {
	Id            int                 `json:"id"`
	StateValue    contractState.State `json:"stateValue"`
	StateDisplay  string              `json:"stateDisplay"`
	CustomerData  customer.Customer   `json:"customerData"`
	VehicleUsages []Usage             `json:"vehicleUsages"`
	Total         float64             `json:"total"`
	TotalPaid     float64             `json:"totalPaid"`
	Visibility    model.Visibility    `json:"visibility"`
}

func (d *Usage) Scan(val interface{}) error {
	b, ok := val.([]byte)
	if ok {
		err := json.Unmarshal(
			b,
			&d,
		)
		return err
	} else {
		return errors.New("invalid contract usage data")
	}
}
