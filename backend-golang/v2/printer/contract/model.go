package contract

import (
	"amber-backend/model/contract"
	"amber-backend/model/customer"
)

type Model struct {
	Id           int               `json:"id"`
	CustomerData customer.Shrinked `json:"customerData"`
	ContractData contract.Data     `json:"contractData"`
	Total        float64           `json:"total"`
	ChangeId     int               `json:"changeId"`
}
