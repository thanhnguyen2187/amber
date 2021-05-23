package v2

import (
	"net/http"

	"amber-backend/v2/bikemodel"
	"amber-backend/v2/printer"
	"github.com/go-chi/chi/v5"
)

func Router() http.Handler {
	r := chi.NewRouter()
	r.Get(
		"/contracts/{contractId}/print",
		printer.Print,
	)
	r.Post(
		"/v2/bike-models/search",
		bikemodel.Search,
	)
	r.Post(
		"/v2/bike-models/upsert",
		bikemodel.Upsert,
	)

	return r
}
