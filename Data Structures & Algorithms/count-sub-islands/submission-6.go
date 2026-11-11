func countSubIslands(grid1 [][]int, grid2 [][]int) int {
    rows := len(grid2)
    cols := len(grid2[0])
    count := 0

    var dfs func(int, int) bool

    dfs = func(r, c int) bool {
        if r < 0 || c < 0 || r >= rows || c >= cols || grid2[r][c] == 0 {
            return true
        }

        grid2[r][c] = 0

        valid := grid1[r][c] == 1

        if !dfs(r+1, c) {
            valid = false
        }
        if !dfs(r-1, c) {
            valid = false
        }
        if !dfs(r, c+1) {
            valid = false
        }
        if !dfs(r, c-1) {
            valid = false
        }

        return valid
    }

    for i := 0; i < rows; i++ {
        for j := 0; j < cols; j++ {
            if grid2[i][j] == 1 {
                if dfs(i, j) {
                    count++
                }
            }
        }
    }

    return count
}