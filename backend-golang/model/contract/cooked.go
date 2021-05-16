package contract

import (
	"encoding/json"
	"errors"
	"time"

	"amber-backend/model"
	"amber-backend/model/contract/request"
	contractState "amber-backend/model/contract/state"
	"amber-backend/model/customer"
)

type Usage struct {
	DateCreated      time.Time           `json:"dateCreated"`
	UsageId          int                 `json:"usageId"`
	ContractId       int                 `json:"contractId"`
	Type             request.RentalType  `json:"type"`
	BikeModelId      int                 `json:"bikeModelId"`
	BikeModelData    model.BikeModelData `json:"bikeModelData"`
	Amount           int                 `json:"amount"`
	TypeDisplay      string              `json:"typeDisplay"`
	DayCount         float64             `json:"dayCount"`
	MonthCount       float64             `json:"monthCount"`
	Price            float64             `json:"price"`
	DateStart        time.Time           `json:"dateStart"`
	DateStartDisplay string              `json:"dateStartDisplay"`
	DateEnd          time.Time           `json:"dateEnd"`
	DateEndDisplay   string              `json:"dateEndDisplay"`
	Total            float64             `json:"total"`
}

type Cooked struct {
	Id               int                 `json:"id"`
	StateValue       contractState.State `json:"stateValue"`
	StateDisplay     string              `json:"stateDisplay"`
	CustomerData     customer.Customer   `json:"customerData"`
	VehicleUsages    []Usage             `json:"vehicleUsages"`
	VehicleUsagesLog []Usage             `json:"vehicleUsagesLog"`
	Payments         []Payment           `json:"payments"`
	Total            float64             `json:"total"`
	TotalPaid        float64             `json:"totalPaid"`
	Visibility       model.Visibility    `json:"visibility"`
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
