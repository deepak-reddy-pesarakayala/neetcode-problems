func regionsBySlashes(grid []string) int {
    n := len(grid)
    size := n * 3
    expanded := make([][]int, size)

    for i := range expanded {
        expanded[i] = make([]int, size)
    }

    for i := 0; i < n; i++ {
        for j := 0; j < n; j++ {
            r, c := i*3, j*3

            if grid[i][j] == '/' {
                expanded[r][c+2] = 1
                expanded[r+1][c+1] = 1
                expanded[r+2][c] = 1
            } else if grid[i][j] == '\\' {
                expanded[r][c] = 1
                expanded[r+1][c+1] = 1
                expanded[r+2][c+2] = 1
            }
        }
    }

    var dfs func(int, int)
    dfs = func(r, c int) {
        if r < 0 || r >= size || c < 0 || c >= size || expanded[r][c] == 1 {
            return
        }

        expanded[r][c] = 1

        dfs(r-1, c)
        dfs(r+1, c)
        dfs(r, c-1)
        dfs(r, c+1)
    }

    regions := 0

    for i := 0; i < size; i++ {
        for j := 0; j < size; j++ {
            if expanded[i][j] == 0 {
                regions++
                dfs(i, j)
            }
        }
    }

    return regions
}