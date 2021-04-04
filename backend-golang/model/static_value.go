package model

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
)

type AdditionalData struct {
	Source string `json:"source"`
	Title string `json:"title"`
}

type StaticValue struct {
	Id             int
	AdditionalData AdditionalData `db:"additional_data" json:"additional_data"`
	//AdditionalData string
}

func (d *AdditionalData) Value() (driver.Value, error) {
	return json.Marshal(d)
}

func (d *AdditionalData) Scan(val interface{}) error {
	switch v := val.(type){
	case []byte:
		json.Unmarshal(v, &d)
		return nil
	case string:
		json.Unmarshal([]byte(v), &d)
		return nil
	default:
		return errors.New("unsupported type")
	}
}