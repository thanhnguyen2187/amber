package customer

import (
	"time"
)

type Customer struct {
	Id                      int       `json:"id,omitempty" db:"id"`
	FullName                string    `json:"fullName,omitempty" db:"full_name"`
	DateOfBirth             time.Time `json:"dateOfBirth,omitempty" db:"date_of_birth"`
	Nationality             string    `json:"nationality,omitempty" db:"nationality"`
	Email                   string    `json:"email,omitempty" db:"email"`
	PhoneNumber             string    `json:"phoneNumber,omitempty" db:"phone_number"`
	PassportNumber          string    `json:"passportNumber,omitempty" db:"passport_number"`
	PassportNumberIssueFrom time.Time `json:"passportNumberIssueFrom,omitempty" db:"passport_number_issue_from"`
	PassportNumberIssueTo   time.Time `json:"passportNumberIssueTo,omitempty" db:"passport_number_issue_to"`
	VisaNumber              string    `json:"visaNumber,omitempty" db:"visa_number"`
	VisaNumberValidityFrom  time.Time `json:"visaNumberValidityFrom,omitempty" db:"visa_number_validity_from"`
	VisaNumberValidityTo    time.Time `json:"visaNumberValidityTo,omitempty" db:"visa_number_validity_to"`
}
