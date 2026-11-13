func shortestBridge(grid [][]int) int {
    n := len(grid)
    directions := [][2]int{
        {-1, 0}, {1, 0}, {0, -1}, {0, 1},
    }

    queue := [][2]int{}
    found := false

    var dfs func(int, int)
    dfs = func(r, c int) {
        if r < 0 || c < 0 || r >= n || c >= n || grid[r][c] != 1 {
            return
        }

        grid[r][c] = 2
        queue = append(queue, [2]int{r, c})

        for _, d := range directions {
            dfs(r+d[0], c+d[1])
        }
    }

    for i := 0; i < n && !found; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == 1 {
                dfs(i, j)
                found = true
                break
            }
        }
    }

    flips := 0

    for head := 0; head < len(queue); head++ {
        size := len(queue) - head

        for i := 0; i < size; i++ {
            cell := queue[head+i]
            r, c := cell[0], cell[1]

            for _, d := range directions {
                nr := r + d[0]
                nc := c + d[1]

                if nr < 0 || nc < 0 || nr >= n || nc >= n {
                    continue
                }

                if grid[nr][nc] == 1 {
                    return flips
                }

                if grid[nr][nc] == 0 {
                    grid[nr][nc] = 2
                    queue = append(queue, [2]int{nr, nc})
                }
            }
        }

        head += size - 1
        flips++
    }

    return -1
}