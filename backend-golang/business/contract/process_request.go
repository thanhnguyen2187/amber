package contract

import (
	"amber-backend/data/contract"
	"amber-backend/model/contract/request"
)

func ProcessRequest(
	body request.Body,
) (
	error,
) {
	err := contract.CreateFromBody(body)
	if err != nil {
		return err
	}

	return nil
}
