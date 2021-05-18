package tz

import (
	"log"
	"time"
)

func Init() {
	loc, err := time.LoadLocation("Etc/UTC")
	time.Local = loc
	if err != nil {
		log.Panicf(
			"Errors happened setting default time zone: %v",
			err,
		)
	}
}
