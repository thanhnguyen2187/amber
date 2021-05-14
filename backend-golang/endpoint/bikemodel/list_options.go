package bikemodel

import (
	"amber-backend/business/bikemodel"
	bikemodel2 "amber-backend/model/bikemodel"
	"encoding/json"
	"log"
	"net/http"
)

func ListOptions(
	w http.ResponseWriter,
	r *http.Request,
) {

	options, err := bikemodel.ListOptions()
	if err != nil {
		log.Printf(
			"Errors happened when calling business function: %v",
			err,
		)
	} else {
		type returnData struct {
			BikeModelOptions []bikemodel2.Option `json:"bikeModelOptions"`
			Total            int                 `json:"total"`
		}
		b, err := json.Marshal(
			returnData{
				BikeModelOptions: options,
				Total:            len(options),
			},
		)
		if err != nil {
			log.Printf(
				"Errors happened while marshalling: %v",
				err,
			)
		} else {
			_, _ = w.Write(b)
		}
	}

}
