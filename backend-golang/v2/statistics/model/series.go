package model

type SingleSeries struct {
	Name   string   `json:"name"`
	Series []Record `json:"series"`
}
