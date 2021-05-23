package customer

import (
	"encoding/json"
	"errors"
)

type Shrinked struct {
	FullName    string `json:"fullName,omitempty" db:"full_name"`
	Email       string `json:"email,omitempty" db:"email"`
	PhoneNumber string `json:"phoneNumber,omitempty" db:"phone_number"`
}

func (d *Shrinked) Scan(val interface{}) error {
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

