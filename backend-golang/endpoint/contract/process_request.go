package contract

import (
	"amber-backend/business/contract"
	contractRequest "amber-backend/model/contract/request"
	"encoding/json"
	"log"
	"net/http"
)

func ProcessRequest(
	w http.ResponseWriter,
	r *http.Request,
) {
	var body contractRequest.Body

	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf("Error happened decoding body: %v", err)
	}
	err = contract.ProcessRequest(body)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf("Error happened processing contract request: %v", err)
	}
	// w.WriteHeader(http.StatusAccepted)
}
