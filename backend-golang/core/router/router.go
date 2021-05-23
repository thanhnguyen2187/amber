package router

import (
	"amber-backend/core/auth"
	"amber-backend/core/respjson"
	"amber-backend/endpoint/bikemodel"
	"amber-backend/endpoint/contract"
	"amber-backend/endpoint/metadata"
	v2 "amber-backend/v2"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/go-chi/jwtauth/v5"
)

func Router() chi.Router {
	r := chi.NewRouter()

	r.Use(
		cors.AllowAll().Handler,
	)
	r.Use(respjson.RespJSON)
	r.Use(middleware.Logger)

	// Protected Routes
	r.Group(
		func(r chi.Router) {
			r.Use(jwtauth.Verifier(auth.TokenAuth))
			r.Use(jwtauth.Authenticator)
		},
	)
	// Public Routes
	r.Group(
		func(r chi.Router) {
			r.Mount(
				"/",
				v2.Router(),
			)
			r.Mount(
				"/metadata",
				metadata.Router(),
			)
			r.Mount(
				"/bike-models",
				bikemodel.Router(),
			)
			r.Mount(
				"/contract",
				contract.Router(),
			)
		},
	)

	return r
}
