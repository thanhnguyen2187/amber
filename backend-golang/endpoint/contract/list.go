package contract

import (
	contractBusiness "amber-backend/business/contract"
	"amber-backend/core/param"
	contractModel "amber-backend/model/contract"
	"encoding/json"
	"log"
	"net/http"
)

func List(
	w http.ResponseWriter,
	r *http.Request,
) {
	size := param.DefaultInt(
		r,
		"size",
		10,
	)
	page := param.DefaultInt(
		r,
		"page",
		1,
	)
	orders := param.DefaultStringArray(
		r,
		"orders",
		make(
			[]string,
			0,
		),
	)

	cookedContracts, err := contractBusiness.List(
		size,
		page,
		orders,
	)
	if err != nil {
		log.Printf(
			"Errors happened while listing contracts: %v",
			err,
		)
	}
	total, err := contractBusiness.Total()
	if err != nil {
		log.Printf(
			"Errors happened while counting contracts: %v",
			err,
		)
	}

	if err == nil {
		type returnData struct {
			CookedContracts []contractModel.Cooked `json:"cookedContracts"`
			Page            int                    `json:"page"`
			Size            int                    `json:"size"`
			Total           int                    `json:"total"`
		}
		b, err := json.Marshal(
			returnData{
				CookedContracts: cookedContracts,
				Page:            page,
				Size:            size,
				Total:           total,
			},
		)
		if err != nil {
			log.Printf(
				"Errors happened while marshalling: %v",
				err,
			)
		} else {
			_, _ = w.Write(b)
		}
	}
	// total

}
