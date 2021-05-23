package bikemodel

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func Router() http.Handler {
	r := chi.NewRouter()
	r.Get(
		"/",
		List,
	)
	r.Get(
		"/options",
		ListOptions,
	)
	return r
}
