package db

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
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
