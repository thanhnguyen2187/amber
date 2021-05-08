package main

import (
	"amber-backend/core"
	"amber-backend/core/conf"
	"amber-backend/core/router"
	"net/http"
	"strconv"
)

func main() {
	core.Init()
	defer core.Terminate()

	_ = http.ListenAndServe(
		":" + strconv.Itoa(conf.Config.ServerPort),
		router.Router(),
	)
}