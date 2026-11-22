type Cell struct {
    effort int
    row    int
    col    int
}

type MinHeap []Cell

func (h MinHeap) Len() int {
    return len(h)
}

func (h MinHeap) Less(i, j int) bool {
    return h[i].effort < h[j].effort
}

func (h MinHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(Cell))
}

func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func minimumEffortPath(heights [][]int) int {
    rows, cols := len(heights), len(heights[0])

    dist := make([][]int, rows)
    for i := range dist {
        dist[i] = make([]int, cols)
        for j := range dist[i] {
            dist[i][j] = int(^uint(0) >> 1)
        }
    }

    directions := [][]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}

    h := &MinHeap{}
    heap.Init(h)

    dist[0][0] = 0
    heap.Push(h, Cell{0, 0, 0})

    for h.Len() > 0 {
        cur := heap.Pop(h).(Cell)

        r, c := cur.row, cur.col

        if r == rows-1 && c == cols-1 {
            return cur.effort
        }

        if cur.effort > dist[r][c] {
            continue
        }

        for _, d := range directions {
            nr := r + d[0]
            nc := c + d[1]

            if nr >= 0 && nr < rows && nc >= 0 && nc < cols {
                diff := heights[r][c] - heights[nr][nc]
                if diff < 0 {
                    diff = -diff
                }

                newEffort := max(cur.effort, diff)

                if newEffort < dist[nr][nc] {
                    dist[nr][nc] = newEffort
                    heap.Push(h, Cell{newEffort, nr, nc})
                }
            }
        }
    }

    return 0
}
