type Cell struct {
    value int
    r     int
    c     int
}

type MinHeap []Cell

func (h MinHeap) Len() int {
    return len(h)
}

func (h MinHeap) Less(i, j int) bool {
    return h[i].value < h[j].value
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

func maxPoints(grid [][]int, queries []int) []int {
    m, n := len(grid), len(grid[0])

    type Query struct {
        value int
        index int
    }

    sortedQueries := make([]Query, len(queries))

    for i, q := range queries {
        sortedQueries[i] = Query{q, i}
    }

    sort.Slice(sortedQueries, func(i, j int) bool {
        return sortedQueries[i].value < sortedQueries[j].value
    })

    visited := make([][]bool, m)
    for i := range visited {
        visited[i] = make([]bool, n)
    }

    h := &MinHeap{}
    heap.Init(h)

    heap.Push(h, Cell{grid[0][0], 0, 0})
    visited[0][0] = true

    directions := [][]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}

    answer := make([]int, len(queries))
    points := 0

    for _, q := range sortedQueries {
        for h.Len() > 0 && (*h)[0].value < q.value {
            cur := heap.Pop(h).(Cell)
            points++

            for _, d := range directions {
                nr := cur.r + d[0]
                nc := cur.c + d[1]

                if nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc] {
                    visited[nr][nc] = true
                    heap.Push(h, Cell{grid[nr][nc], nr, nc})
                }
            }
        }

        answer[q.index] = points
    }

    return answer
}
