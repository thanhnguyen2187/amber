package contract

import (
	contract2 "amber-backend/business/contract"
	"amber-backend/model/contract"
	"encoding/json"
	"log"
	"net/http"
)

func UpdatePayments(
	w http.ResponseWriter,
	r *http.Request,
) {
	var body struct {
		ContractId int                `json:"contractId"`
		Payments   []contract.Payment `json:"payments"`
	}
	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf(
			"Errors happened decoding body: %v",
			err,
		)
	}

	err = contract2.UpdatePayments(body.ContractId, body.Payments)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Printf(
			"Errors happened updating payment: %v",
			err,
		)
	} else {
		w.WriteHeader(http.StatusAccepted)
	}

}
