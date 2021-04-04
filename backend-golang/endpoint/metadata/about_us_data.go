package metadata

import (
	"amber-backend/business/metadata"
	"log"
	"net/http"
)

func AboutUsData(
	w http.ResponseWriter,
	r *http.Request,
) {
	data, err := metadata.AboutUs()
	if err != nil {
		log.Printf("Error happened with about us: %v", err)
	}
	//TODO: let the endpoint be where data is serialized
	// 	    and deserialized
	_, _ = w.Write(data)
}
