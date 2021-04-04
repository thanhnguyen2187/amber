package metadata

import (
	"amber-backend/data/metadata"
	"amber-backend/model"
	"encoding/json"
)

func HomePageData() ([]byte, error) {
	type HomeData struct {
		CoverImages model.MediaFiles `json:"coverImages"`
	}

	return json.Marshal(
		HomeData{
			CoverImages: metadata.QueryCoverImages("home"),
		},
	)
}
