package stringsutil

import (
	"strings"
)

func Has(
	s string,
	substrs []string,
) (
	has bool,
) {
	has = true
	for _, substr := range substrs {
		if strings.Index(
			strings.ToLower(s),
			strings.ToLower(substr),
		) == -1 { // does not have
			has = false
			return
		}
	}

	return
}
