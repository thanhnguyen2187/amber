package customer

type Shrinked struct {
	FullName    string `json:"fullName,omitempty" db:"full_name"`
	Email       string `json:"email,omitempty" db:"email"`
	PhoneNumber string `json:"phoneNumber,omitempty" db:"phone_number"`
}
