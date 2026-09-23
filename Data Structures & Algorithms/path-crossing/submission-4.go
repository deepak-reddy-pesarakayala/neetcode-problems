func isPathCrossing(path string) bool {
	x, y := 0, 0

	visited := make(map[[2]int]bool)
	visited[[2]int{0, 0}] = true

	for i := 0; i < len(path); i++ {
		switch path[i] {
		case 'N':
			y++
		case 'S':
			y--
		case 'E':
			x++
		case 'W':
			x--
		}

		point := [2]int{x, y}

		if visited[point] {
			return true
		}

		visited[point] = true
	}

	return false
}
