func minMeetingRooms(intervals []Interval) int {
	if len(intervals) == 0 {
		return 0
	}

	starts := make([]int, len(intervals))
	ends := make([]int, len(intervals))

	for i := 0; i < len(intervals); i++ {
		starts[i] = intervals[i].start
		ends[i] = intervals[i].end
	}

	sort.Ints(starts)
	sort.Ints(ends)

	start := 0
	end := 0
	rooms := 0
	maxRooms := 0

	for start < len(intervals) {
		if starts[start] < ends[end] {
			rooms++
			if rooms > maxRooms {
				maxRooms = rooms
			}
			start++
		} else {
			rooms--
			end++
		}
	}

	return maxRooms
}
