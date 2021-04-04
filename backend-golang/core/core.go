package core

import (
	"amber-backend/core/auth"
	"amber-backend/core/conf"
	"amber-backend/core/db"
)

func Init() {
	conf.Init()
	db.Init(
		conf.Config.DbDriver,
		conf.Config.DbSource,
	)
	auth.Init(conf.Config.SecretKey)
}

func Terminate() {
	db.Terminate()
}
