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
	return r
}
