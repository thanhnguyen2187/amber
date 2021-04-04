package metadata

import (
	"github.com/go-chi/chi/v5"
	"net/http"
)

func Router() http.Handler {
	r := chi.NewRouter()
	r.Get("/common-page-data", CommonPageData)
	r.Get("/home-page-data", HomePageData)
	r.Get("/about-us-data", AboutUsData)
	return r
}