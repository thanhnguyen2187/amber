package model

import (
	"encoding/json"
	"errors"
)

type BikeModelData struct {
	Brand                           string `json:"brand"`
	Name                            string `json:"name"`
	Capacity                        int    `json:"capacity"`
	Cost                            int    `json:"cost"`
	CostDisplay                     string    `json:"cost_display"`
	DailyRentalFeeInsideCity        int    `json:"daily_rental_fee_inside_city"`
	DailyRentalFeeInsideCityDisplay string `json:"daily_rental_fee_inside_city_display"`
	DailyRentalFeeTraveling         int    `json:"daily_rental_fee_traveling"`
	DailyRentalFeeTravelingDisplay  string `json:"daily_rental_fee_traveling_display"`
	MonthlyRentalFee                int    `json:"monthly_rental_fee"`
	MonthlyRentalFeeDisplay         string `json:"monthly_rental_fee_display"`
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
		Brand                           string `json:"brand"`
		Name                            string `json:"name"`
		Capacity                        int    `json:"capacity"`
		Cost                            int    `json:"cost"`
		CostDisplay                     string `json:"costDisplay"`
		DailyRentalFeeInsideCity        int    `json:"dailyRentalFeeInsideCity"`
		DailyRentalFeeInsideCityDisplay string `json:"dailyRentalFeeInsideCityDisplay"`
		DailyRentalFeeTraveling         int    `json:"dailyRentalFeeTraveling"`
		DailyRentalFeeTravelingDisplay  string `json:"dailyRentalFeeTravelingDisplay"`
		MonthlyRentalFee                int    `json:"monthlyRentalFee"`
		MonthlyRentalFeeDisplay         string `json:"monthlyRentalFeeDisplay"`
	}(d))
}

type BikeModel struct {
	Id         int           `json:"id"`
	ModelData  BikeModelData `json:"model_data"`
	MediaFiles MediaFiles    `json:"media_files"`
}

func (m BikeModel) MarshalJSON() ([]byte, error) {
	return json.Marshal(struct {
		Id         int           `json:"id"`
		ModelData  BikeModelData `json:"modelData"`
		MediaFiles MediaFiles    `json:"mediaFiles"`
	}(m))
}

//Simplified Bike Model
type SimBikeModel struct {
	Id                     int    `json:"id"`
	ImageReference         string `json:"imageReference"`
	Name                   string `json:"name"`
	PriceForSale           string `json:"priceForSale"`
	PriceForRentInsideCity string `json:"priceForRentInsideCity"`
	PriceForRentTraveling  string `json:"priceForRentTraveling"`
	PriceForRentMonthly    string `json:"priceForRentMonthly"`
}

func TransformBikeModels(
	bikeModels []BikeModel,
) []SimBikeModel {
	simBikeModels := make([]SimBikeModel, 0)
	for _, bikeModel := range bikeModels {
		source := "https://via.placeholder.com/300x200"
		if len(bikeModel.MediaFiles) > 0 {
			source = bikeModel.MediaFiles[0].Source
		}
		simBikeModels = append(
			simBikeModels,
			SimBikeModel{
				Id:                     bikeModel.Id,
				ImageReference:         source,
				Name:                   bikeModel.ModelData.Name,
				PriceForSale:           bikeModel.ModelData.CostDisplay,
				PriceForRentInsideCity: bikeModel.ModelData.DailyRentalFeeInsideCityDisplay,
				PriceForRentTraveling:  bikeModel.ModelData.DailyRentalFeeTravelingDisplay,
				PriceForRentMonthly:    bikeModel.ModelData.MonthlyRentalFeeDisplay,
			},
		)
	}
	return simBikeModels
}
