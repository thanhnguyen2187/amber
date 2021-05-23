package format

import (
	"strings"

	"github.com/olekukonko/tablewriter"
)

func AddTable(
	builder *strings.Builder,
	header []string,
	data [][]string,
) {
	tableBuilder := &strings.Builder{}
	table := tablewriter.NewWriter(tableBuilder)

	table.SetHeader(header)

	table.SetBorder(false)
	table.SetRowLine(false)
	table.SetAutoWrapText(false)

	table.SetCenterSeparator(" ")
	table.SetColumnSeparator(" ")
	table.SetRowSeparator(" ")
	table.AppendBulk(data)
	table.Render()

	builder.WriteString(tableBuilder.String())
}
