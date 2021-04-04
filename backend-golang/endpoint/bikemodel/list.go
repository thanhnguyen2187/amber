package bikemodel

import (
	"amber-backend/business/bikemodel"
	"amber-backend/core/param"
	"amber-backend/model"
	"encoding/json"
	"log"
	"net/http"
)

func List(
	w http.ResponseWriter,
	r *http.Request,
) {
	size := param.DefaultInt(r, "size", 12)
	page := param.DefaultInt(r, "page", 1)
	tags := param.DefaultStringArray(r, "tags", make([]string, 0))
	tags_, _ := param.StringArray(r, "tags")
	log.Printf("Something %v", tags_)
	orders := param.DefaultStringArray(r, "orders", make([]string, 0))

	bikeModels, total, err := bikemodel.List(
		size,
		page,
		tags,
		orders,
	)
	if err != nil {
		log.Printf("Errors happened when calling business function: %v", err)
	} else {
		type returnData struct {
			BikeModels []model.BikeModel `json:"bikeModels"`
			Total int `json:"total"`
		}
		b, err := json.Marshal(returnData{
			BikeModels: bikeModels,
			Total:      total,
		})
		if err != nil {
			log.Printf("Error happened when unmarshaling: %v", err)
		} else {
			_, _ = w.Write(b)
		}
	}
}
