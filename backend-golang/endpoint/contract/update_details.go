package contract

import (
	"encoding/json"
	"log"
	"net/http"

	contract2 "amber-backend/business/contract"
	"amber-backend/model/contract"
	"amber-backend/model/contract/state"
	"amber-backend/model/customer"
)

func UpdateDetails(
	w http.ResponseWriter,
	r *http.Request,
) (
) {
	var (
		body struct {
			ContractId    int               `json:"contractId"`
			State         state.State       `json:"state"`
			CustomerData  customer.Shrinked `json:"customerData"`
			VehicleUsages []contract.Usage  `json:"vehicleUsages"`
		}
		err error
		// b []byte
	)
	err = json.NewDecoder(r.Body).Decode(&body)
	// b, err = ioutil.ReadAll(r.Body)
	// if err != nil {
	// 	w.WriteHeader(http.StatusBadRequest)
	// 	log.Printf(
	// 		"Errors happended reading body: %v",
	// 		err,
	// 	)
	// }
	// err = json.Unmarshal(b, &body)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf(
			"Errors happended decoding body: %v",
			err,
		)
	}

	err = contract2.UpdateDetails(
		body.ContractId,
		body.State,
		body.CustomerData,
		body.VehicleUsages,
	)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf(
			"Errors happended updating details: %v",
			err,
		)
	} else {
		w.WriteHeader(http.StatusAccepted)
	}
}
