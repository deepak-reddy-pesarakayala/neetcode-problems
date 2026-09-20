func findMissingAndRepeatedValues(grid [][]int) []int {
	n := len(grid)
	size := n * n

	freq := make([]int, size+1)

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			freq[grid[i][j]]++
		}
	}

	repeated := 0
	missing := 0

	for i := 1; i <= size; i++ {
		if freq[i] == 2 {
			repeated = i
		} else if freq[i] == 0 {
			missing = i
		}
	}

	return []int{repeated, missing}
}