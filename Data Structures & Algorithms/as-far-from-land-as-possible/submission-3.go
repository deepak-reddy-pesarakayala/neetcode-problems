func maxDistance(grid [][]int) int {
    n := len(grid)
    queue := [][2]int{}
    land, water := 0, 0

    for i := 0; i < n; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == 1 {
                queue = append(queue, [2]int{i, j})
                land++
            } else {
                water++
            }
        }
    }

    if land == 0 || water == 0 {
        return -1
    }

    directions := [][2]int{
        {-1, 0}, {1, 0},
        {0, -1}, {0, 1},
    }

    distance := -1

    for len(queue) > 0 {
        size := len(queue)

        for i := 0; i < size; i++ {
            cell := queue[0]
            queue = queue[1:]

            r, c := cell[0], cell[1]

            for _, d := range directions {
                nr := r + d[0]
                nc := c + d[1]

                if nr >= 0 && nc >= 0 && nr < n && nc < n && grid[nr][nc] == 0 {
                    grid[nr][nc] = 1
                    queue = append(queue, [2]int{nr, nc})
                }
            }
        }

        distance++
    }

    return distance
}