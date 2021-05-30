package bikemodel

import (
	"encoding/json"
	"log"
	"net/http"

	"amber-backend/core/param"
	"amber-backend/v2/bikemodel/fetch"
	"amber-backend/v2/bikemodel/model"
)

func Search(
	w http.ResponseWriter,
	r *http.Request,
) {
	var (
		page             int
		size             int
		err              error
		cookedBikeModels []model.Cooked
		total            int
		body             struct {
			BikeName struct {
				Name string `json:"name"`
			} `json:"bikeName"`
			// TODO: fix the wrong names
			PossibleUsageTypes []int    `json:"bikeData"`
			BikeTypes          []string `json:"transmission"`
			Visibilities       []int    `json:"visibility"`
		}
	)

	page = param.DefaultInt(r, "page", 1)
	size = param.DefaultInt(r, "size", 10)

	err = json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	cookedBikeModels, err = fetch.Do(
		body.BikeName.Name,
		body.PossibleUsageTypes,
		body.BikeTypes,
		body.Visibilities,
		page,
		size,
	)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	total, err = fetch.CountTotal(
		body.BikeName.Name,
		body.PossibleUsageTypes,
		body.BikeTypes,
		body.Visibilities,
	)

	type returnData struct {
		CookedBikeModels []model.Cooked `json:"cookedBikeModels"`
		Size             int            `json:"size"`
		Total            int            `json:"total"`
	}
	var b []byte
	b, err = json.Marshal(
		returnData{
			CookedBikeModels: cookedBikeModels,
			Size:             size,
			Total:            total,
		},
	)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	_, _ = w.Write(b)
}
