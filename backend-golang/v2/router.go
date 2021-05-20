package v2

import (
	"net/http"

	"amber-backend/v2/printer"
	"github.com/go-chi/chi/v5"
)

func Router() http.Handler {
	r := chi.NewRouter()
	r.Post(
		"/print/{contractId}",
		printer.Print,
	)

	return r
}
