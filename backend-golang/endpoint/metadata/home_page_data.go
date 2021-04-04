package metadata

import (
	"amber-backend/business/metadata"
	"net/http"
)

func HomePageData(w http.ResponseWriter, r *http.Request) {
	data, _ := metadata.HomePageData()
	_, _ = w.Write(data)
}
