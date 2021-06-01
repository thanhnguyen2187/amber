package bikemodel

import (
	"encoding/json"
	"log"
	"net/http"

	"amber-backend/v2/bikemodel/model"
	"amber-backend/v2/bikemodel/upsert"
)

func Upsert(
	w http.ResponseWriter,
	r *http.Request,
) {
	var (
		cookedBikeModel    model.Cooked
		// uniqueNumberPlates bool
		err                error
	)

	err = json.NewDecoder(r.Body).Decode(&cookedBikeModel)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// uniqueNumberPlates, err = check.Do(cookedBikeModel.ModelData.NumberPlates)
	// if err != nil {
	// 	log.Print(err)
	// 	w.WriteHeader(http.StatusBadRequest)
	// 	return
	// }
	// if !uniqueNumberPlates {
	// 	log.Print("duplicated number plates")
	// 	w.WriteHeader(http.StatusBadRequest)
	// 	return
	// }

	err = upsert.Do(cookedBikeModel)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusAccepted)

}
