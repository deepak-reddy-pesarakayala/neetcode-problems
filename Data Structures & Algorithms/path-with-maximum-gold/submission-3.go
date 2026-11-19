func getMaximumGold(grid [][]int) int {
    m, n := len(grid), len(grid[0])
    directions := [][]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}
    answer := 0

    var dfs func(int, int) int

    dfs = func(r, c int) int {
        gold := grid[r][c]
        grid[r][c] = 0

        best := 0

        for _, d := range directions {
            nr := r + d[0]
            nc := c + d[1]

            if nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] > 0 {
                best = max(best, dfs(nr, nc))
            }
        }

        grid[r][c] = gold
        return gold + best
    }

    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] > 0 {
                answer = max(answer, dfs(i, j))
            }
        }
    }

    return answer
}
