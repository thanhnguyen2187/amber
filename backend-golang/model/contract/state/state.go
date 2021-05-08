package state

const (
	Invalid = -1
	Created = 0
	Pending = 1
	Booked = 2
	InEffect = 3
	Finished = 4
	Overdue = 5
)
type State int
