func orangesRotting(grid [][]int) int {
    rows := len(grid)
    cols := len(grid[0])

    queue := [][2]int{}
    fresh := 0

    for i := 0; i < rows; i++ {
        for j := 0; j < cols; j++ {
            if grid[i][j] == 2 {
                queue = append(queue, [2]int{i, j})
            } else if grid[i][j] == 1 {
                fresh++
            }
        }
    }

    if fresh == 0 {
        return 0
    }

    directions := [][2]int{
        {1, 0},
        {-1, 0},
        {0, 1},
        {0, -1},
    }

    minutes := 0

    for head := 0; head < len(queue); {
        size := len(queue) - head
        rotted := false

        for i := 0; i < size; i++ {
            r, c := queue[head][0], queue[head][1]
            head++

            for _, d := range directions {
                nr := r + d[0]
                nc := c + d[1]

                if nr < 0 || nc < 0 || nr >= rows || nc >= cols {
                    continue
                }

                if grid[nr][nc] == 1 {
                    grid[nr][nc] = 2
                    fresh--
                    queue = append(queue, [2]int{nr, nc})
                    rotted = true
                }
            }
        }

        if rotted {
            minutes++
        }
    }

    if fresh > 0 {
        return -1
    }

    return minutes
}