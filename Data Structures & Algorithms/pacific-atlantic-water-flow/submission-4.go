func pacificAtlantic(heights [][]int) [][]int {
	rows := len(heights)
	cols := len(heights[0])

	pacific := make([][]bool, rows)
	atlantic := make([][]bool, rows)

	for i := 0; i < rows; i++ {
		pacific[i] = make([]bool, cols)
		atlantic[i] = make([]bool, cols)
	}

	var dfs func(int, int, [][]bool)

	dfs = func(r, c int, visited [][]bool) {
		visited[r][c] = true

		directions := [][2]int{
			{1, 0},
			{-1, 0},
			{0, 1},
			{0, -1},
		}

		for _, direction := range directions {
			nr := r + direction[0]
			nc := c + direction[1]

			if nr < 0 || nr >= rows || nc < 0 || nc >= cols {
				continue
			}

			if visited[nr][nc] {
				continue
			}

			if heights[nr][nc] < heights[r][c] {
				continue
			}

			dfs(nr, nc, visited)
		}
	}

	for r := 0; r < rows; r++ {
		dfs(r, 0, pacific)
		dfs(r, cols-1, atlantic)
	}

	for c := 0; c < cols; c++ {
		dfs(0, c, pacific)
		dfs(rows-1, c, atlantic)
	}

	result := [][]int{}

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if pacific[r][c] && atlantic[r][c] {
				result = append(result, []int{r, c})
			}
		}
	}

	return result
}