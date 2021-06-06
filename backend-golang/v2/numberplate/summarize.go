package numberplate

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	model2 "amber-backend/v2/numberplate/model"
	"amber-backend/v2/numberplate/state"
)

func Summarize(
	w http.ResponseWriter,
	r *http.Request,
) {
	var (
		err  error
		body struct {
			DateStart   time.Time `json:"dateStart"`
			DateEnd     time.Time `json:"dateEnd"`
			Types       []string  `json:"types"`
			NumberPlate string    `json:"numberPlate"`
			BikeName    string    `json:"bikeName"`
		}
		numberPlatesFreeState   []model2.NumberPlateState
		numberPlatesBookedState []model2.NumberPlateState
		numberPlatesTakenState  []model2.NumberPlateState
	)

	err = json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	numberPlatesFreeState, numberPlatesBookedState, numberPlatesTakenState, err =
		state.Summarize(
			body.DateStart,
			body.DateEnd,
			body.Types,
			body.NumberPlate,
			body.BikeName,
		)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	type returnData struct {
		NumberPlatesFree   []model2.NumberPlateState `json:"numberPlatesFree"`
		NumberPlatesBooked []model2.NumberPlateState `json:"numberPlatesBooked"`
		NumberPlatesTaken  []model2.NumberPlateState `json:"numberPlatesTaken"`
	}
	var b []byte
	b, err = json.Marshal(
		returnData{
			NumberPlatesFree:   numberPlatesFreeState,
			NumberPlatesBooked: numberPlatesBookedState,
			NumberPlatesTaken:  numberPlatesTakenState,
		},
	)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	_, _ = w.Write(b)
}
