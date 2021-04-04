package db

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"log"
)

var Db *sql.DB

func Init(
	driverName string,
	dataSourceName string,
) {
	db, err := sql.Open(
		driverName,
		dataSourceName,
	)
	if err != nil {
		log.Fatalf("Error happened: %v", err)
	}
	Db = db
}

func Terminate() {
	_ = Db.Close()
}
