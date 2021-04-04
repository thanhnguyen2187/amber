package metadata

import (
	"amber-backend/data/metadata"
	"encoding/json"
)

func CommonPageData() ([]byte, error) {
	type CommonPageData struct {
		FooterData metadata.FooterData `json:"footerData"`
	}
	return json.Marshal(
		CommonPageData{
			FooterData: metadata.QueryFooterData(),
		},
	)
}