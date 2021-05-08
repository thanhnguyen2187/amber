package esclient

import (
	"github.com/elastic/go-elasticsearch/v8"
	"github.com/elastic/go-elasticsearch/v8/estransport"
	"log"
	"os"
)

var ESClient *elasticsearch.Client

func Init(
	esAddress string,
) (
) {
	esConfig := elasticsearch.Config{
		Addresses: []string{esAddress},
		Logger: &estransport.ColorLogger{Output: os.Stdout},
	}
	esClient, err := elasticsearch.NewClient(esConfig)
	if err != nil {
		log.Printf(
			"Error creating Elastic Search client: %v",
			err,
		)
	}
	ESClient = esClient
}
