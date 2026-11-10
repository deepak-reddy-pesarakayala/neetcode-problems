func findMaxFish(grid [][]int) int {
    rows := len(grid)
    cols := len(grid[0])
    maxFish := 0

    var dfs func(int, int) int

    dfs = func(r, c int) int {
        if r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == 0 {
            return 0
        }

        fish := grid[r][c]
        grid[r][c] = 0

        fish += dfs(r+1, c)
        fish += dfs(r-1, c)
        fish += dfs(r, c+1)
        fish += dfs(r, c-1)

        return fish
    }

    for i := 0; i < rows; i++ {
        for j := 0; j < cols; j++ {
            if grid[i][j] > 0 {
                total := dfs(i, j)
                if total > maxFish {
                    maxFish = total
                }
            }
        }
    }

    return maxFish
}