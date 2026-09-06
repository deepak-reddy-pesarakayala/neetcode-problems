func canAttendMeetings(intervals []Interval) bool {
	if len(intervals) <= 1 {
		return true
	}
    sort.Slice(intervals, func(i, j int) bool {
		return intervals[i].start < intervals[j].start
	})
    for i := 1; i < len(intervals); i++ {
		if intervals[i].start < intervals[i-1].end {
			return false
		}
	}
    return true
}