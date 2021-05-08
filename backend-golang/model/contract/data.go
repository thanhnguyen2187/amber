package contract

import (
	"encoding/json"
	"errors"
)

type Data struct {
	Deposit   string `json:"deposit,omitempty" db:"deposit"`
	Equipment string `json:"equipment,omitempty" db:"equipment"`
	Note      string `json:"note" db:"note"`
}

func (d *Data) Scan(val interface{}) error {
	b, ok := val.([]byte)
	if ok {
		err := json.Unmarshal(
			b,
			&d,
		)
		return err
	} else {
		return errors.New("invalid bike model data")
	}
}

