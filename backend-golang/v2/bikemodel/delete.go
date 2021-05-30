package bikemodel

import (
	"log"
	"net/http"
	"strconv"

	"amber-backend/v2/bikemodel/delete"
	"github.com/go-chi/chi/v5"
)

func Delete(
	w http.ResponseWriter,
	r *http.Request,
) {
	var (
		bikeModelId int
		err error
	)

	bikeModelId, err = strconv.Atoi(
		chi.URLParam(
			r,
			"contractId",
		),
	)

	err = delete.Do(bikeModelId)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusAccepted)
}
