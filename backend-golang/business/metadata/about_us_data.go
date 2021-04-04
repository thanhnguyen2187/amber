package metadata

import (
	"amber-backend/data/metadata"
	"amber-backend/model"
	"encoding/json"
)

func AboutUs() ([]byte, error) {
	type AboutUsData struct {
		CoverImages model.MediaFiles `json:"coverImages"`
	}

	return json.Marshal(
		AboutUsData{
			CoverImages: metadata.QueryCoverImages("about_us"),
		},
	)
}
