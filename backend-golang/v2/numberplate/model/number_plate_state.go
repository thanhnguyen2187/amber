package model

type NumberPlateState struct {
	Label      string `json:"label"`
	Value      string `json:"value"`
	ContractId int    `json:"contractId"`
	BikeName   string `json:"bikeName"`
	// CookedContract contract.Cooked `json:"cookedContract"`
}
