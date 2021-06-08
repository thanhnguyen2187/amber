package state

import (
	"log"
	"time"

	"amber-backend/model/contract/request"
	"amber-backend/model/contract/state"
	model2 "amber-backend/v2/numberplate/model"
)

func Summarize(
	dateStart time.Time,
	dateEnd time.Time,
	types []string,
	numberPlate string,
	bikeName string,
) (
	numberPlateStatesFree []model2.NumberPlateState,
	numberPlateStatesBooked []model2.NumberPlateState,
	numberPlateStatesTaken []model2.NumberPlateState,
	err error,
) {

	var (
		numberPlateStatesAll    []model2.NumberPlateState
		numberPlateStatesBought []model2.NumberPlateState
	)

	numberPlateStatesAll, err = fetchAllNumberPlates(
		types,
		numberPlate,
		bikeName,
	)
	if err != nil {
		log.Print(err)
		return
	}

	numberPlateStatesBooked, err = fetchByState(
		dateStart,
		dateEnd,
		types,
		numberPlate,
		bikeName,
		state.Booked,
		[]int{
			// TODO: handle the case where customer booked a bike to buy
			// 	     and want to take it at a specific day
			// request.DailyInsideCity,
			// request.DailyTraveling,
			// request.Monthly,
		},
	)
	if err != nil {
		log.Print(err)
		return
	}

	numberPlateStatesTaken, err = fetchByState(
		dateStart,
		dateEnd,
		types,
		numberPlate,
		bikeName,
		state.InEffect,
		[]int{
			request.DailyInsideCity,
			request.DailyTraveling,
			request.Monthly,
		},
	)
	if err != nil {
		log.Print(err)
		return
	}

	numberPlateStatesBought, err = fetchByState(
		dateStart,
		dateEnd,
		types,
		numberPlate,
		bikeName,
		state.Finished,
		[]int{
			request.ForSale,
		},
	)
	if err != nil {
		log.Print(err)
		return
	}

	var (
		numberPlatesAllSet = make(map[string]bool)
		// numberPlatesFreeSet   = make(map[string]bool)
		numberPlatesBookedSet = make(map[string]bool)
		numberPlatesTakenSet  = make(map[string]bool)
	)

	numberPlatesAllSet["unknown"] = true
	for _, p := range numberPlateStatesAll {
		numberPlatesAllSet[p.Value] = true
	}
	for _, p := range numberPlateStatesBooked {
		if s, ok := numberPlatesAllSet[p.Value]; ok && s {
			numberPlatesBookedSet[p.Value] = true
			numberPlatesAllSet[p.Value] = false
		} else {
			log.Print("Number plate " + p.Value + " was not declared anywhere.")
		}
	}
	for _, p := range numberPlateStatesTaken {
		if s, ok := numberPlatesAllSet[p.Value]; ok && s {
			numberPlatesTakenSet[p.Value] = true
			numberPlatesAllSet[p.Value] = false
		} else {
			log.Print("Number plate " + p.Value + " was not declared anywhere.")
		}
	}
	for _, p := range numberPlateStatesBought {
		if s, ok := numberPlatesAllSet[p.Value]; ok && s {
			numberPlatesAllSet[p.Value] = false
		} else {
			log.Print("Number plate " + p.Value + " was not declared anywhere.")
		}
	}

	for _, st := range numberPlateStatesAll {
		marked, ok := numberPlatesAllSet[st.Value]
		if marked && ok && st.Value != "unknown" {
			numberPlateStatesFree = append(
				numberPlateStatesFree,
				st,
			)
		}
	}

	return
}
