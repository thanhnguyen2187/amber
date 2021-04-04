package router

import (
	"amber-backend/core/auth"
	"amber-backend/core/respjson"
	"amber-backend/endpoint/bikemodel"
	"amber-backend/endpoint/metadata"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/jwtauth/v5"
)

func Router() chi.Router {
	r := chi.NewRouter()
	r.Use(respjson.RespJSON)

	// Protected Routes
	r.Group(func(r chi.Router) {
		r.Use(jwtauth.Verifier(auth.TokenAuth))
		r.Use(jwtauth.Authenticator)
	})
	// Public Routes
	r.Group(func(r chi.Router) {
		r.Mount("/metadata", metadata.Router())
		r.Mount("/bike-models", bikemodel.Router())
	})
	return r
}
