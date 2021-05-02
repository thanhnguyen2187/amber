package contract

type Data struct {
	Deposit   string `json:"deposit,omitempty" db:"deposit"`
	Equipment string `json:"equipment,omitempty" db:"equipment"`
	Note      string `json:"note,omitempty" db:"note"`
}
