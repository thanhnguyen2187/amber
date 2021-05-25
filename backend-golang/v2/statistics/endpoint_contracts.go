package statistics

import (
	"encoding/json"
	"log"
	"net/http"

	"amber-backend/core/param"
	"amber-backend/v2/statistics/contracts"
	"amber-backend/v2/statistics/model"
)

func Contracts(
	w http.ResponseWriter,
	r *http.Request,
)  {
	var (
		singleSeries model.SingleSeries
		multipleSeries []model.SingleSeries
		err error
		b []byte
		dateStart string
		dateEnd string
	)

	dateStart = param.DefaultString(r, "dateStart", "")
	dateEnd = param.DefaultString(r, "dateEnd", "")

	singleSeries, err = contracts.Aggregate(dateStart, dateEnd)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Print(err)
		return
	}

	multipleSeries = []model.SingleSeries{singleSeries}
	b, err = json.Marshal(multipleSeries)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		log.Print(err)
		return
	}

	_, _ = w.Write(b)
}
