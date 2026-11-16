func closedIsland(grid [][]int) int {
    m, n := len(grid), len(grid[0])

    var dfs func(int, int) bool
    dfs = func(r, c int) bool {
        if r < 0 || r >= m || c < 0 || c >= n {
            return false
        }

        if grid[r][c] == 1 {
            return true
        }

        grid[r][c] = 1

        up := dfs(r-1, c)
        down := dfs(r+1, c)
        left := dfs(r, c-1)
        right := dfs(r, c+1)

        return up && down && left && right
    }

    count := 0

    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == 0 {
                if dfs(i, j) {
                    count++
                }
            }
        }
    }

    return count
}