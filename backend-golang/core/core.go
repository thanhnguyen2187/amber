package core

import (
	"amber-backend/core/auth"
	"amber-backend/core/conf"
	"amber-backend/core/db"
	"amber-backend/core/esclient"
	"log"
)

func Init() {
	log.SetFlags(log.Llongfile)

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
