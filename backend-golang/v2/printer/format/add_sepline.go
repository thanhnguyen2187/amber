package format

import (
	"strings"
)

func AddSepLine(builder *strings.Builder) {
	builder.WriteString(
		strings.Repeat(
			"=",
			80,
		),
	)
	builder.WriteString("\n")
}
