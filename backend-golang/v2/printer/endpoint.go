package printer

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

func Print(
	w http.ResponseWriter,
	r *http.Request,
) {
	var (
		contractId int
		err        error
	)

	contractId, err = strconv.Atoi(
		chi.URLParam(
			r,
			"contractId",
		),
	)
	if err != nil {
		log.Printf(
			"Errors happened converting param contractId: %v",
			err,
		)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	var (
		filePath string
		fileName string
	)

	// fileName, filePath, err = format.Run(contractId)
	if err != nil {
		log.Printf(
			"Errors happened persisting contract id %v: %v",
			contractId,
			err,
		)
		w.WriteHeader(http.StatusInternalServerError)
		return
	} else {
		w.Header().Set(
			"Content-Disposition",
			fmt.Sprintf(
				"attachment; filename=%v",
				fileName,
			),
		)
		w.Header().Set(
			"Content-Type",
			"text/plain",
		)
		body, err := ioutil.ReadFile(filePath)
		if err != nil {
			log.Printf(
				"Errors happened reading file content: %v",
				err,
			)
		} else {
			_, err = w.Write(body)
			if err != nil {
				log.Printf(
					"Errors happened writing file content: %v",
					err,
				)
			}
		}
	}
}
