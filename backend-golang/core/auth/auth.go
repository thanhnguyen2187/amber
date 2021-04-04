package auth

import (
	"github.com/go-chi/jwtauth/v5"
)

var TokenAuth *jwtauth.JWTAuth

func Init(secretKey string) {
	TokenAuth = jwtauth.New(
		"HS256",
		[]byte(secretKey),
		nil,
	)
}