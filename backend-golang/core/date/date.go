package date

import (
	"math"
	"time"
)

func beginOfDay(
	t time.Time,
) time.Time {
	return time.Date(
		t.Year(),
		t.Month(),
		t.Day(),
		0,
		0,
		0,
		0,
		t.Location(),
	)
}

func DiffInDays(
	left time.Time,
	right time.Time,
) float64 {
	return math.Ceil(
		right.Sub(left).Hours() / 24,
	) + 1
}
