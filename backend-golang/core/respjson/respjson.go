package respjson

import "net/http"

func RespJSON(
	h http.Handler,
) (
	http.Handler,
) {
	return http.HandlerFunc(
		func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set(
				"Content-Type",
				"application/json; charset=utf-8",
			)
			h.ServeHTTP(w, r)
		},
	)
}