func minimumObstacles(grid [][]int) int {
    m, n := len(grid), len(grid[0])

    const INF = int(^uint(0) >> 1)

    dist := make([][]int, m)
    for i := range dist {
        dist[i] = make([]int, n)
        for j := range dist[i] {
            dist[i][j] = INF
        }
    }

    type Cell struct {
        r, c int
    }

    deque := make([]Cell, 1, m*n*2)
    deque[0] = Cell{0, 0}
    dist[0][0] = 0

    directions := [][]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}

    for len(deque) > 0 {
        cur := deque[0]
        deque = deque[1:]

        for _, d := range directions {
            nr := cur.r + d[0]
            nc := cur.c + d[1]

            if nr < 0 || nr >= m || nc < 0 || nc >= n {
                continue
            }

            cost := grid[nr][nc]
            newDist := dist[cur.r][cur.c] + cost

            if newDist < dist[nr][nc] {
                dist[nr][nc] = newDist

                if cost == 0 {
                    deque = append([]Cell{{nr, nc}}, deque...)
                } else {
                    deque = append(deque, Cell{nr, nc})
                }
            }
        }
    }

    return dist[m-1][n-1]
}
