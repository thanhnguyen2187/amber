package printer

import (
	"io/ioutil"
	"os"
)

func persistContract(contractId int) (
	fileName string,
	filePath string,
	err error,
) {
	filePath = "/tmp/test.txt"
	fileName = "test.txt"
	_ = os.Remove(filePath)
	err = ioutil.WriteFile(filePath, []byte(filePath + "\n" + fileName), 0644)
	return
}
