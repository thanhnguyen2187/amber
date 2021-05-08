package round

func Round(
	value float64,
	step float64,
	mathFunc func(float64) float64,
) float64 {
	inv := 1 / step
	return mathFunc(value * inv) / inv
}
