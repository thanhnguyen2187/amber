package statistics

import (
	"encoding/json"
	"log"
	"net/http"

	"amber-backend/v2/statistics/bikemodel_types"
	"amber-backend/v2/statistics/model"
)

func BikeModelTypes(
	w http.ResponseWriter,
	r *http.Request,
)  {
	var (
		records []model.Record
		err error
		b []byte
	)

	records, err = bikemodel_types.Aggregate()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Print(err)
		return
	}

	b, err = json.Marshal(records)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Print(err)
		return
	}

	_, _ = w.Write(b)
}
