package upsert

import (
	"encoding/json"
	"fmt"
	"log"
	"strings"

	"amber-backend/core/db"
	"amber-backend/v2/bikemodel/model"
	"github.com/doug-martin/goqu/v9"
)

func genQuery(
	cooked model.Cooked,
) (
	query string,
	err error,
) {
	var (
		d       *goqu.InsertDataset
		dialect goqu.DialectWrapper
		mdb     []byte
		mfb     []byte
	)

	mdb, err = json.Marshal(cooked.ModelData)
	if err != nil {
		log.Print(err)
		return
	}
	mfb, err = json.Marshal(cooked.MediaFiles)
	if err != nil {
		log.Print(err)
		return
	}

	dialect = db.Dialect()
	d = dialect.
		Insert("bike_model").
		Rows(
			goqu.Record{
				"id":          cooked.Id,
				"model_data":  mdb,
				"media_files": mfb,
			},
		).
		OnConflict(
			goqu.DoUpdate(
				"key",
				goqu.Record{
					"model_data":  mdb,
					"media_files": mfb,
				},
			),
		)

	query, _, err = d.ToSQL()

	return
}

func genQueryDeleteTag(
	cooked model.Cooked,
) (
	query string,
	err error,
) {
	var (
		dialect goqu.DialectWrapper
		ds      *goqu.DeleteDataset
	)

	dialect = db.Dialect()
	ds = dialect.
		Delete("bike_tag_map").
		Where(
			goqu.C("bike_model_id").Eq(cooked.Id),
		)

	query, _, err = ds.ToSQL()

	return
}

func genQueryInsertTag(
	cooked model.Cooked,
) (
	query string,
	err error,
) {
	var (
		dialect     goqu.DialectWrapper
		ds          *goqu.InsertDataset
		capacityTag string
		records     []goqu.Record
	)

	dialect = db.Dialect()
	ds = dialect.
		Insert("bike_tag_map")

	records = append(
		records,
		goqu.Record{
			"bike_model_id": cooked.Id,
			"tag_key":       cooked.ModelData.Type,
		},
	)

	if cooked.ModelData.Capacity < 125 {
		capacityTag = "less-125"
	} else if cooked.ModelData.Capacity < 250 {
		capacityTag = "125-249"
	} else {
		capacityTag = "250-more"
	}

	tagged := false
	brands := []string{
		"honda",
		"suzuki",
		"yamaha",
	}
	for _, brand := range brands {
		if strings.Index(
			strings.ToLower(cooked.ModelData.Name),
			brand,
		) != -1 {
			records = append(
				records,
				goqu.Record{
					"bike_model_id": cooked.Id,
					"tag_key":       brand,
				},
			)
			tagged = true
			break
		}
	}

	if !tagged {
		records = append(
			records,
			goqu.Record{
				"bike_model_id": cooked.Id,
				"tag_key":       "other",
			},
		)
	}

	records = append(
		records,
		goqu.Record{
			"bike_model_id": cooked.Id,
			"tag_key":       capacityTag,
		},
	)

	ds = ds.Rows(records)
	query, _, err = ds.ToSQL()

	return
}

func genQueryUpdateUsage(
	cooked model.Cooked,
) (
	query string,
	err error,
) {
	var (
		dialect goqu.DialectWrapper
		ds      *goqu.UpdateDataset
		quoted  []string
	)

	for _, plate := range cooked.ModelData.NumberPlates {
		quoted = append(quoted, "'" + plate + "'")
	}

	dialect = db.Dialect()
	ds = dialect.
		Update("contract_map_usage").
		Set(
			goqu.Record{
				"model_data": goqu.L(
					fmt.Sprintf(
						"JSON_SET(model_data, '$.number_plates', JSON_ARRAY(%v))",
						strings.Join(quoted, ","),
						// create JSON_ARRAY('29M1 ...', '33A ...', ...)
					),
				),
			},
		).
		Where(
			goqu.C("model_id").Eq(cooked.Id),
		)

	query, _, err = ds.ToSQL()
	return
}
