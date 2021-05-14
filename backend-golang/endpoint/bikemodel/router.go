package bikemodel

import (
	"github.com/go-chi/chi/v5"
	"net/http"
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
