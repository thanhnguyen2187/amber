package core

import (
	"log"

	"amber-backend/core/auth"
	"amber-backend/core/conf"
	"amber-backend/core/db"
	"amber-backend/core/esclient"
	// "amber-backend/core/tz"
)

func Init() {
	log.SetFlags(log.Llongfile)

	// tz.Init()
	conf.Init()
	db.Init(
		conf.Config.DbDriver,
		conf.Config.DbSource,
	)
	auth.Init(conf.Config.SecretKey)
	esclient.Init(conf.Config.ElasticSearchAddress)
}

func Terminate() {
	db.Terminate()
}
