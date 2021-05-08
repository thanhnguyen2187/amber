package contract

import (
	contractBusiness "amber-backend/business/contract"
	"amber-backend/core/param"
	contractModel "amber-backend/model/contract"
	"amber-backend/model/contract/list"
	"encoding/json"
	"log"
	"net/http"
)

func ListV2(
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

	var body list.ContractBody
	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		log.Printf(
			"Errors happened decoding body: %v",
			err,
		)
	}

	cookedContracts, total, err := contractBusiness.ListV2(
		size,
		page,
		orders,
		body,
	)
	if err != nil {
		log.Printf(
			"Errors happened while listing contracts v2: %v",
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

}
