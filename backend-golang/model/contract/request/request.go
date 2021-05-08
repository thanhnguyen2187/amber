package request

import (
	"encoding/json"
	"errors"
	"time"
)

type RentalType int

const (
	DailyInsideCity = 0
	DailyTraveling  = 1
	Monthly         = 2
	ForSale         = 10
)

type Rental struct {
	BikeModelId int        `json:"bikeModelId"`
	Amount      int        `json:"amount"`
	Type        RentalType `json:"type"`
	DateStart   time.Time  `json:"dateStart"`
	DateEnd     time.Time  `json:"dateEnd"`
}
type Sale struct {
	BikeModelId int
	Amount      int
}

type Body struct {
	Requests struct {
		RentalsDailyInsideCity []Rental `json:"dailyInsideCity,omitempty"`
		RentalsDailyTraveling  []Rental `json:"dailyTraveling,omitempty"`
		RentalsMonthly         []Rental `json:"monthly,omitempty"`
		Sales                  []Rental `json:"forSale,omitempty"`
	} `json:"requests"`
	FullName    string `json:"fullName"`
	Email       string `json:"email"`
	PhoneNumber string `json:"phoneNumber"`
	Note        string `json:"note"`
}

func (d *Rental) Scan(val interface{}) error {
	b, ok := val.([]byte)
	if ok {
		err := json.Unmarshal(
			b,
			&d,
		)
		return err
	} else {
		return errors.New("invalid rental usage data")
	}
}

