package db

import (
	"github.com/doug-martin/goqu/v9"
	_ "github.com/doug-martin/goqu/v9/dialect/mysql"
)

func Dialect() (
	dialect goqu.DialectWrapper,
) {
	dialect = goqu.Dialect("mysql")
	return dialect
}