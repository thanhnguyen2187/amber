package request

import (
	"time"
)

type RentalType int
const (
	DailyInsideCity = 0
	DailyTraveling = 1
	Monthly = 2
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
		Sales                  []Sale   `json:"forSale,omitempty"`
	} `json:"requests"`
	FullName    string `json:"fullName"`
	Email       string `json:"email"`
	PhoneNumber string `json:"phone_number"`
	Note        string `json:"note"`
}
