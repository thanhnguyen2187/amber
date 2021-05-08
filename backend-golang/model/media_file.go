package model

import (
	"encoding/json"
	"errors"
)

type MediaFile struct {
	Title  string `json:"title"`
	Source string `json:"source"`
}

type MediaFiles []MediaFile

func (i *MediaFiles) Scan(val interface{}) error {
	b, ok := val.([]byte)
	if ok {
		err := json.Unmarshal(b, &i)
		return err
	} else {
		return errors.New("invalid media files data")
	}
}
