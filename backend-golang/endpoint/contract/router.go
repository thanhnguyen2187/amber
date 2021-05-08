package contract

import (
	"github.com/go-chi/chi/v5"
	"net/http"
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
	return r
}
