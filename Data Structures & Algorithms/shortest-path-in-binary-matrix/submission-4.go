func shortestPathBinaryMatrix(grid [][]int) int {
    n := len(grid)

    if grid[0][0] != 0 || grid[n-1][n-1] != 0 {
        return -1
    }

    directions := [][2]int{
        {-1, -1}, {-1, 0}, {-1, 1},
        {0, -1},           {0, 1},
        {1, -1},  {1, 0},  {1, 1},
    }

    queue := [][2]int{{0, 0}}
    grid[0][0] = 1
    length := 1

    for len(queue) > 0 {
        size := len(queue)

        for i := 0; i < size; i++ {
            cell := queue[0]
            queue = queue[1:]

            r, c := cell[0], cell[1]

            if r == n-1 && c == n-1 {
                return length
            }

            for _, d := range directions {
                nr := r + d[0]
                nc := c + d[1]

                if nr >= 0 && nc >= 0 && nr < n && nc < n && grid[nr][nc] == 0 {
                    grid[nr][nc] = 1
                    queue = append(queue, [2]int{nr, nc})
                }
            }
        }

        length++
    }

    return -1
}