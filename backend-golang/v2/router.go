package v2

import (
	"net/http"

	"amber-backend/v2/bikemodel"
	"amber-backend/v2/printer"
	"amber-backend/v2/statistics"
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
	r.Delete(
		"/v2/bike-models/{bikeModelId}",
		bikemodel.Delete,
	)
	r.Post(
		"/v2/bike-models/{bikeModelId}/toggle/{visibility}",
		bikemodel.ToggleVisibility,
	)

	r.Get(
		"/v2/statistics/bike-model-types",
		statistics.BikeModelTypes,
	)
	r.Get(
		"/v2/statistics/contracts",
		statistics.Contracts,
	)
	r.Get(
		"/v2/statistics/revenue",
		statistics.Revenue,
	)

	return r
}
