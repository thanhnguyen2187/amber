package model

import (
	"encoding/json"
	"errors"
	"fmt"
	"strings"
)

type BikeModelData struct {
	Brand                    string  `json:"brand"`
	Name                     string  `json:"name"`
	Type                     string  `json:"type"`
	Capacity                 int     `json:"capacity"`
	Cost                     float32 `json:"cost"`
	DailyRentalFeeInsideCity float32 `json:"dailyRentalFeeInsideCity"`
	DailyRentalFeeTraveling  float32 `json:"dailyRentalFeeTraveling"`
	MonthlyRentalFee         float32 `json:"monthlyRentalFee"`
}

func (d *BikeModelData) Scan(val interface{}) error {
	b, ok := val.([]byte)
	if ok {
		err := json.Unmarshal(
			b,
			&d,
		)
		return err
	} else {
		return errors.New("invalid bike model data")
	}
}

// func (d BikeModelData) MarshalJSON() (
// 	[]byte,
// 	error,
// ) {
// 	return json.Marshal(
// 		struct {
// 			Brand                    string  `json:"brand"`
// 			Name                     string  `json:"name"`
// 			Type                     string  `json:"type"`
// 			Capacity                 int     `json:"capacity"`
// 			Cost                     float32 `json:"cost"`
// 			DailyRentalFeeInsideCity float32 `json:"dailyRentalFeeInsideCity"`
// 			DailyRentalFeeTraveling  float32 `json:"dailyRentalFeeTraveling"`
// 			MonthlyRentalFee         float32 `json:"monthlyRentalFee"`
// 		}(d),
// 	)
// }

type BikeModel struct {
	Id         int           `json:"id"`
	ModelData  BikeModelData `json:"model_data"`
	MediaFiles MediaFiles    `json:"media_files"`
}

func (m BikeModel) MarshalJSON() (
	[]byte,
	error,
) {
	return json.Marshal(
		struct {
			Id         int           `json:"id"`
			ModelData  BikeModelData `json:"modelData"`
			MediaFiles MediaFiles    `json:"mediaFiles"`
		}(m),
	)
}

// SimBikeModel Simplified Bike Model
type SimBikeModel struct {
	Id                            int        `json:"id"`
	ImageReference                string     `json:"imageReference"`
	Images                        MediaFiles `json:"images"`
	Name                          string     `json:"name"`
	Capacity                      int        `json:"capacity"`
	TypeDisplay                   string     `json:"typeDisplay"`
	Description                   string     `json:"description"`
	PriceForSale                  float32    `json:"priceForSale"`
	PriceForSaleDisplay           string     `json:"priceForSaleDisplay"`
	PriceForRentInsideCity        float32    `json:"priceForRentInsideCity"`
	PriceForRentInsideCityDisplay string     `json:"priceForRentInsideCityDisplay"`
	PriceForRentTraveling         float32    `json:"priceForRentTraveling"`
	PriceForRentTravelingDisplay  string     `json:"priceForRentTravelingDisplay"`
	PriceForRentMonthly           float32    `json:"priceForRentMonthly"`
	PriceForRentMonthlyDisplay    string     `json:"priceForRentMonthlyDisplay"`
}

func TransformBikeModels(
	bikeModels []BikeModel,
) []SimBikeModel {
	simBikeModels := make(
		[]SimBikeModel,
		0,
	)
	for _, bikeModel := range bikeModels {
		source := "https://via.placeholder.com/300x200"
		if len(bikeModel.MediaFiles) > 0 {
			source = bikeModel.MediaFiles[0].Source
		}
		typeDisplay :=
			strings.Title(
				fmt.Sprintf(
					"%s",
					bikeModel.ModelData.Type,
				),
			)
		priceForSaleDisplay := fmt.Sprintf(
			"%g",
			bikeModel.ModelData.Cost,
		) + " USD"
		priceForRentInsideCityDisplay := fmt.Sprintf(
			"%g",
			bikeModel.ModelData.DailyRentalFeeInsideCity,
		) + " USD"
		priceForRentTravelingDisplay := fmt.Sprintf(
			"%g",
			bikeModel.ModelData.DailyRentalFeeTraveling,
		) + " USD"
		priceForRentMonthlyDisplay := fmt.Sprintf(
			"%g",
			bikeModel.ModelData.MonthlyRentalFee,
		) + " USD"
		simBikeModels = append(
			simBikeModels,
			SimBikeModel{
				Id:                            bikeModel.Id,
				ImageReference:                source,
				Capacity:                      bikeModel.ModelData.Capacity,
				TypeDisplay:                   typeDisplay,
				Images:                        bikeModel.MediaFiles,
				Name:                          bikeModel.ModelData.Name,
				PriceForSale:                  bikeModel.ModelData.Cost,
				PriceForRentInsideCity:        bikeModel.ModelData.DailyRentalFeeInsideCity,
				PriceForRentTraveling:         bikeModel.ModelData.DailyRentalFeeTraveling,
				PriceForRentMonthly:           bikeModel.ModelData.MonthlyRentalFee,
				PriceForSaleDisplay:           priceForSaleDisplay,
				PriceForRentInsideCityDisplay: priceForRentInsideCityDisplay,
				PriceForRentTravelingDisplay:  priceForRentTravelingDisplay,
				PriceForRentMonthlyDisplay:    priceForRentMonthlyDisplay,
			},
		)
	}
	return simBikeModels
}
