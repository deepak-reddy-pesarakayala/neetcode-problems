type Cell struct {
    r, c int
    time int
}

type MinHeap []Cell

func (h MinHeap) Len() int {
    return len(h)
}

func (h MinHeap) Less(i, j int) bool {
    return h[i].time < h[j].time
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

func swimInWater(grid [][]int) int {
    n := len(grid)
    visited := make([][]bool, n)

    for i := range visited {
        visited[i] = make([]bool, n)
    }

    directions := [][]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}

    h := &MinHeap{}
    heap.Init(h)
    heap.Push(h, Cell{0, 0, grid[0][0]})
    visited[0][0] = true

    for h.Len() > 0 {
        cur := heap.Pop(h).(Cell)

        if cur.r == n-1 && cur.c == n-1 {
            return cur.time
        }

        for _, d := range directions {
            nr := cur.r + d[0]
            nc := cur.c + d[1]

            if nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc] {
                visited[nr][nc] = true

                newTime := max(cur.time, grid[nr][nc])
                heap.Push(h, Cell{nr, nc, newTime})
            }
        }
    }

    return 0
}
