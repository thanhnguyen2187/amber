package contract

import (
	"amber-backend/business/contract"
	"amber-backend/model"
	"encoding/json"
	"log"
	"net/http"
)

func UpdateVisibility(
	w http.ResponseWriter,
	r *http.Request,
) {
	var body struct {
		ContractId    int              `json:"contractId"`
		NewVisibility model.Visibility `json:"newVisibility"`
	}
	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf(
			"Errors happened decoding body: %v",
			err,
		)
	}

	err = contract.UpdateVisibility(
		body.ContractId,
		body.NewVisibility,
	)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf(
			"Errors happened updating contract visibility: %v",
			err,
		)
	} else {
		w.WriteHeader(http.StatusAccepted)
	}
}
