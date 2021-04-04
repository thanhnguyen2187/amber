package metadata

import (
	"amber-backend/core/db"
	"encoding/json"
	"errors"
	"log"
)

type FooterData struct {
	Email            string `json:"email"`
	PhoneNumber      string `json:"phone_number"`
	ShopAddress      string `json:"shop_address"`
	WarehouseAddress string `json:"warehouse_address"`
}

func (d *FooterData) Scan(val interface{}) error {
	b, ok := val.([]byte)
	if ok {
		err := json.Unmarshal(b, &d)
		return err
	} else {
		return errors.New("invalid common page data")
	}
}

func (d FooterData) MarshalJSON() ([]byte, error) {
	type alias struct {
		Email            string `json:"email"`
		PhoneNumber      string `json:"phoneNumber"`
		ShopAddress      string `json:"shopAddress"`
		WarehouseAddress string `json:"warehouseAddress"`
	}
	a := alias(d)
	return json.Marshal(a)
}

func QueryFooterData() FooterData {
	var footerData FooterData
	err := db.Db.QueryRow(
		"select data from static_value " +
			"where module_name = 'end_user.common_page' " +
			"and `key` = 'footer'",
	).Scan(&footerData)
	if err != nil {
		log.Print(err)
	}
	return footerData
}
