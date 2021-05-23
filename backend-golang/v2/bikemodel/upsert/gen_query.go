package upsert

import (
	"encoding/json"
	"log"

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
