func numEnclaves(grid [][]int) int {
    m, n := len(grid), len(grid[0])

    var dfs func(int, int)
    dfs = func(r, c int) {
        if r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0 {
            return
        }

        grid[r][c] = 0

        dfs(r-1, c)
        dfs(r+1, c)
        dfs(r, c-1)
        dfs(r, c+1)
    }

    for i := 0; i < m; i++ {
        dfs(i, 0)
        dfs(i, n-1)
    }

    for j := 0; j < n; j++ {
        dfs(0, j)
        dfs(m-1, j)
    }

    count := 0

    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == 1 {
                count++
            }
        }
    }

    return count
}