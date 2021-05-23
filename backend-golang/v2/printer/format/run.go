package format

import (
	"fmt"
	"strconv"
	"strings"

	contract2 "amber-backend/model/contract"
	"amber-backend/v2/printer/contract"
)

func Run(
	contract contract.Model,
	usages []contract2.Usage,
) (
	text string,
	err error,
) {
	var builder strings.Builder
	builder.WriteString(
		fmt.Sprintf("Invoice for Contract %v\n", contract.Id),
	)
	builder.WriteString("\n")

	AddSepLine(&builder)

	// Customer Data
	builder.WriteString("Customer Data\n")
	builder.WriteString("\n")
	AddTable(
		&builder,
		[]string{},
		[][]string{
			{
				"Name: ",
				contract.CustomerData.FullName,
			},
			{
				"Email: ",
				contract.CustomerData.Email,
			},
			{
				"Phone Number: ",
				contract.CustomerData.PhoneNumber,
			},
		},
	)
	builder.WriteString("\n")
	AddSepLine(&builder)

	// Usages
	builder.WriteString("Vehicle Usages\n")
	builder.WriteString("\n")
	usagesHeader := []string{
		"Name",
		"Purpose",
		"From",
		"To",
		"Total",
	}
	usagesData := make(
		[][]string,
		0,
	)
	for _, usage := range usages {
		usagesData = append(
			usagesData,
			[]string{
				usage.BikeModelData.Name,
				usage.TypeDisplay,
				usage.DateStartDisplay,
				usage.DateEndDisplay,
				// TODO: create a "common" float formatting function
				strconv.FormatFloat(
					usage.Total,
					'f',
					2,
					64,
				),
			},
		)
	}
	AddTable(
		&builder,
		usagesHeader,
		usagesData,
	)
	builder.WriteString("\n")
	builder.WriteString(
		fmt.Sprintf(
			"TOTAL: %v",
			strconv.FormatFloat(
				contract.Total,
				'f',
				2,
				64,
			),
		),
	)
	text = builder.String()

	return
}
