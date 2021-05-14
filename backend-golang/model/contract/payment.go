package contract

import (
	"time"
)

type Payment struct {
	Id          int       `json:"id"`
	DateCreated time.Time `json:"dateCreated"`
	ContractId  int       `json:"contractId"`
	Amount      float32   `json:"amount"`
	Note        string    `json:"note"`
}
