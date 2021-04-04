package model

import (
	"encoding/json"
	"errors"
)

type BikeModelData struct {
	Brand string `json:"brand"`
	Name string `json:"name"`
	Capacity int `json:"capacity"`
	Cost int `json:"cost"`
	DailyRentalFeeInsideCity int `json:"daily_rental_fee_inside_city"`
	DailyRentalFeeTraveling int `json:"daily_rental_fee_traveling"`
	MonthlyRentalFee int `json:"monthly_rental_fee"`
}

func (d *BikeModelData) Scan(val interface{}) error {
	b, ok := val.([]byte)
	if ok {
		err := json.Unmarshal(b, &d)
		return err
	} else {
		return errors.New("invalid bike model data")
	}
}

func (d BikeModelData) MarshalJSON() ([]byte, error) {
	return json.Marshal(struct {
		Brand string `json:"brand"`
		Name string `json:"name"`
		Capacity int `json:"capacity"`
		Cost int `json:"cost"`
		DailyRentalFeeInsideCity int `json:"dailyRentalFeeInsideCity"`
		DailyRentalFeeTraveling int `json:"dailyRentalFeeTraveling"`
		MonthlyRentalFee int `json:"monthlyRentalFee"`
	}(d))
}

type BikeModel struct {
	Id int `json:"id"`
	ModelData BikeModelData `json:"model_data"`
	MediaFiles MediaFiles `json:"media_files"`
}

func (m BikeModel) MarshalJSON() ([]byte, error) {
	return json.Marshal(struct {
		Id int `json:"id"`
		ModelData BikeModelData `json:"modelData"`
		MediaFiles MediaFiles `json:"mediaFiles"`
	}(m))
}

