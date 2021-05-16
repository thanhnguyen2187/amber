package contract

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func Router() http.Handler {
	r := chi.NewRouter()
	r.Post(
		"/process-request",
		ProcessRequest,
	)
	r.Get(
		"/cooked-contracts",
		List,
	)
	r.Post(
		"/cooked-contracts-v2",
		ListV2,
	)
	r.Post(
		"/update-visibility",
		UpdateVisibility,
	)
	r.Post(
		"/update-payments",
		UpdatePayments,
	)
	r.Post(
		"/update-details",
		UpdateDetails,
	)
	return r
}
