func minCost(grid [][]int) int {
    m, n := len(grid), len(grid[0])

    const INF = int(^uint(0) >> 1)

    dist := make([]int, m*n)
    for i := range dist {
        dist[i] = INF
    }

    type State struct {
        pos  int
        cost int
    }

    dirs := [4][2]int{
        {0, 1},
        {0, -1},
        {1, 0},
        {-1, 0},
    }

    deque := make([]State, 0, 2*m*n)
    dist[0] = 0
    deque = append(deque, State{0, 0})

    head := 0

    for head < len(deque) {
        cur := deque[head]
        head++

        r := cur.pos / n
        c := cur.pos % n

        if cur.cost != dist[cur.pos] {
            continue
        }

        if r == m-1 && c == n-1 {
            return cur.cost
        }

        for i, d := range dirs {
            nr := r + d[0]
            nc := c + d[1]

            if nr < 0 || nr >= m || nc < 0 || nc >= n {
                continue
            }

            next := nr*n + nc
            cost := 1

            if grid[r][c] == i+1 {
                cost = 0
            }

            newCost := cur.cost + cost

            if newCost < dist[next] {
                dist[next] = newCost
                state := State{next, newCost}

                if cost == 0 {
                    deque = append(deque, State{})
                    copy(deque[head+1:], deque[head:])
                    deque[head] = state
                } else {
                    deque = append(deque, state)
                }
            }
        }
    }

    return 0
}
