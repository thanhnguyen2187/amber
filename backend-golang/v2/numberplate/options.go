package numberplate

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"amber-backend/v2/numberplate/model"
	"amber-backend/v2/numberplate/options"
	"github.com/go-chi/chi/v5"
)

func Options(
	w http.ResponseWriter,
	r *http.Request,
) {
	var (
		bikeModelId int
		numberPlateOptions []model.NumberplateOption
		b []byte
		err error
	)

	bikeModelId, err = strconv.Atoi(
		chi.URLParam(
			r,
			"bikeModelId",
		),
	)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	numberPlateOptions, err = options.Fetch(bikeModelId)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	b, err = json.Marshal(numberPlateOptions)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	_, err = w.Write(b)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
