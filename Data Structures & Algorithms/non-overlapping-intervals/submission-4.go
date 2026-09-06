func eraseOverlapIntervals(intervals [][]int) int {
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
    removed := 0
	prevEnd := intervals[0][1]
    for i := 1; i < len(intervals); i++ {
		if intervals[i][0] < prevEnd {
			removed++
            if intervals[i][1] < prevEnd {
				prevEnd = intervals[i][1]
			}
		} else {
			prevEnd = intervals[i][1]
		}
	}
    return removed
}