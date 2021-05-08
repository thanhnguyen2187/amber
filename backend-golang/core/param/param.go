package param

import (
	"errors"
	"github.com/go-chi/chi/v5"
	"net/http"
	"strconv"
)

var ErrInvalidParam = errors.New("failed to get parameter")

func String(
	r *http.Request,
	key string,
) (
	string,
	error,
) {
	v := r.URL.Query().Get(key)
	if len(v) == 0 {
		return "", ErrInvalidParam
	} else {
		return v, nil
	}
}

func DefaultString(
	r *http.Request,
	key string,
	dVal string,
) (
	string,
) {
	v, err := String(r, key)
	if err != nil {
		// log.Printf(
		// 	"Error happened with URL parameter %v: %v",
		// 	key,
		// 	err,
		// )
		// log.Printf("Returning default value: %v", dVal)
		return dVal
	}
	return v
}

func StringArray(
	r *http.Request,
	key string,
) (
	[]string,
	error,
) {
	values, ok := r.URL.Query()[key]
	if !ok {
		return nil, ErrInvalidParam
	} else {
		return values, nil
	}
}

func DefaultStringArray(
	r *http.Request,
	key string,
	dVal []string,
) (
	[]string,
) {
	values, err := StringArray(r, key)
	if err != nil {
		// log.Printf(
		// 	"Error happened with URL parameter %v: %v",
		// 	key,
		// 	err,
		// )
		// log.Printf("Returning default value: %v", dVal)
		return dVal
	} else {
		return values
	}
}

func Int(
	r *http.Request,
	key string,
) (
	int,
	error,
) {
	v, err := strconv.ParseInt(
		r.URL.Query().Get(key),
		10,
		8,
	)
	return int(v), err
}

func DefaultInt(
	r *http.Request,
	key string,
	dVal int,
) (
	int,
) {
	v, err := Int(r, key)
	if err != nil {
		// log.Printf(
		// 	"Error happened with URL parameter %v: %v",
		// 	key,
		// 	err,
		// )
		// log.Printf("Returning default value: %v", dVal)
		return dVal
	}
	return v
}

func Bool(
	r *http.Request,
	key string,
) (
	bool,
	error,
) {
	return strconv.ParseBool(
		chi.URLParam(r, key),
	)
}
