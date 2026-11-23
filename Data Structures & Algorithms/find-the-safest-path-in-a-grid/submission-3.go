import "container/heap"

type Cell struct {
    r, c int
    safe int
}

type MaxHeap []Cell

func (h MaxHeap) Len() int {
    return len(h)
}

func (h MaxHeap) Less(i, j int) bool {
    return h[i].safe > h[j].safe
}

func (h MaxHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *MaxHeap) Push(x interface{}) {
    *h = append(*h, x.(Cell))
}

func (h *MaxHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func maximumSafenessFactor(grid [][]int) int {
    n := len(grid)
    dist := make([][]int, n)
    visited := make([][]bool, n)
    queue := []Cell{}

    for i := 0; i < n; i++ {
        dist[i] = make([]int, n)
        visited[i] = make([]bool, n)

        for j := 0; j < n; j++ {
            dist[i][j] = -1
            if grid[i][j] == 1 {
                dist[i][j] = 0
                queue = append(queue, Cell{i, j, 0})
            }
        }
    }

    directions := [][]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}

    for front := 0; front < len(queue); front++ {
        cur := queue[front]

        for _, d := range directions {
            nr, nc := cur.r+d[0], cur.c+d[1]

            if nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] == -1 {
                dist[nr][nc] = dist[cur.r][cur.c] + 1
                queue = append(queue, Cell{nr, nc, dist[nr][nc]})
            }
        }
    }

    h := &MaxHeap{}
    heap.Init(h)
    heap.Push(h, Cell{0, 0, dist[0][0]})
    visited[0][0] = true

    for h.Len() > 0 {
        cur := heap.Pop(h).(Cell)

        if cur.r == n-1 && cur.c == n-1 {
            return cur.safe
        }

        for _, d := range directions {
            nr, nc := cur.r+d[0], cur.c+d[1]

            if nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc] {
                visited[nr][nc] = true
                newSafe := min(cur.safe, dist[nr][nc])
                heap.Push(h, Cell{nr, nc, newSafe})
            }
        }
    }

    return 0
}
