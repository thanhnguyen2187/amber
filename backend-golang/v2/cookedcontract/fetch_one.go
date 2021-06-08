package cookedcontract

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"amber-backend/model/contract"
	"amber-backend/v2/cookedcontract/fetchone"
	"github.com/go-chi/chi/v5"
)

func FetchOne(
	w http.ResponseWriter,
	r *http.Request,
) {
	var (
		contractId int
		cookedContract contract.Cooked
		b []byte
		err error
	)

	contractId, err = strconv.Atoi(
		chi.URLParam(
			r,
			"contractId",
		),
	)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	cookedContract, err = fetchone.FetchOne(contractId)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	b, err = json.Marshal(cookedContract)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	_, err = w.Write(b)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
