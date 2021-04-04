package metadata

import (
	"amber-backend/business/metadata"
	"log"
	"net/http"
)

func CommonPageData(
	w http.ResponseWriter,
	r *http.Request,
) {
	data, err := metadata.CommonPageData()
	if err != nil {
		log.Printf("Error happened with common page data: %v", err)
	}
	_, _ = w.Write(data)
}
