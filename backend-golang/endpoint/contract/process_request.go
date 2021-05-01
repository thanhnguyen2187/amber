package contract

import (
	"encoding/json"
	"log"
	"net/http"
)

func ProcessRequest(
	w http.ResponseWriter,
	r *http.Request,
) {
	type RentalType int
	// const (
	// 	DailyInsideCity = 0
	// 	DailyTraveling = 1
	// 	Monthly = 2
	// )
	type Rental struct {
		BikeModelId int
		Amount      int
		Type        RentalType
		DateStart   string
		DateEnd     string
	}
	type Sale struct {
		BikeModelId int
		Amount      int
	}

	type Body struct {
		Requests struct {
			RentalsDailyInsideCity []Rental `json:"rentalsDailyInsideCity"`
			RentalsDailyTraveling  []Rental `json:"rentalsDailyTraveling"`
			RentalsMonthly         []Rental `json:"rentalsMonthly"`
			Sales                  []Sale   `json:"sales"`
		} `json:"requests"`
		FullName    string `json:"fullName"`
		Email       string `json:"email"`
		PhoneNumber string `json:"phone_number"`
		Note        string `json:"note"`
	}
	var body Body

	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		log.Printf(
			"Error happened when decoding: %v",
			err,
		)
	}

	log.Printf(
		"Received: %v",
		body,
	)
}
