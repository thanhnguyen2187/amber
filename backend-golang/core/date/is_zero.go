package date

import (
	"time"
)

func IsZero(date time.Time) bool {
	return date.Year() == 1 &&
		date.Month() == 1 &&
		date.Day() == 1
}
