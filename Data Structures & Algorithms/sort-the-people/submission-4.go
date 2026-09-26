func sortPeople(names []string, heights []int) []string {
	n := len(names)

	for i := 0; i < n-1; i++ {
		maxIndex := i

		for j := i + 1; j < n; j++ {
			if heights[j] > heights[maxIndex] {
				maxIndex = j
			}
		}

		heights[i], heights[maxIndex] = heights[maxIndex], heights[i]
		names[i], names[maxIndex] = names[maxIndex], names[i]
	}

	return names
}
