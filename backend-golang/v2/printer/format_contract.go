package printer

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"strconv"

	contract2 "amber-backend/model/contract"
	"amber-backend/v2/printer/contract"
	"amber-backend/v2/printer/format"
	"amber-backend/v2/printer/usage"
)

func formatContract(
	contractId int,
) (
	fileName string,
	filePath string,
	err error,
) {
	var (
		contractIdStr string
		fileContent   string
		contractRaw   contract.Model
		usages        []contract2.Usage
	)
	contractIdStr = strconv.Itoa(contractId)

	fileName = fmt.Sprintf(
		"%v.txt",
		contractIdStr,
	)
	filePath = fmt.Sprintf(
		"/tmp/%v",
		fileName,
	)

	contractRaw, err = contract.Fetch(contractId)
	if err != nil {
		log.Print(err)
		return
	}

	usages, err = usage.Fetch(contractRaw)
	if err != nil {
		log.Print(err)
		return
	}

	fileContent, err = format.Run(contractRaw, usages)
	if err != nil {
		log.Print(err)
		return
	}

	_ = os.Remove(filePath)
	// if err != nil {
	// 	log.Print(err)
	// 	return
	// }

	err = ioutil.WriteFile(
		filePath,
		[]byte(fileContent),
		0644,
	)
	return
}
