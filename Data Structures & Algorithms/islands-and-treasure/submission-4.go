func islandsAndTreasure(grid [][]int) {
    rows := len(grid)
    cols := len(grid[0])

    queue := [][2]int{}

    for i := 0; i < rows; i++ {
        for j := 0; j < cols; j++ {
            if grid[i][j] == 0 {
                queue = append(queue, [2]int{i, j})
            }
        }
    }

    directions := [][2]int{
        {1, 0},
        {-1, 0},
        {0, 1},
        {0, -1},
    }

    for head := 0; head < len(queue); head++ {
        r, c := queue[head][0], queue[head][1]

        for _, d := range directions {
            nr := r + d[0]
            nc := c + d[1]

            if nr < 0 || nc < 0 || nr >= rows || nc >= cols {
                continue
            }

            if grid[nr][nc] != 2147483647 {
                continue
            }

            grid[nr][nc] = grid[r][c] + 1
            queue = append(queue, [2]int{nr, nc})
        }
    }
}