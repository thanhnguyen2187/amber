package bikemodel

import (
	"log"
	"net/http"
	"strconv"

	visibility2 "amber-backend/v2/bikemodel/visibility"
	"github.com/go-chi/chi/v5"
)

func ToggleVisibility(
	w http.ResponseWriter,
	r *http.Request,
) {
	var (
		bikeModelId int
		visibility int
		err error
	)

	bikeModelId, err = strconv.Atoi(
		chi.URLParam(
			r,
			"bikeModelId",
		),
	)
	visibility, err = strconv.Atoi(
		chi.URLParam(
			r,
			"visibility",
		),
	)

	err = visibility2.Toggle(bikeModelId, visibility)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusAccepted)
}
