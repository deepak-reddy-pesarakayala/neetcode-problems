type Query struct {
    height int
    index  int
    pos    int
}

type MinHeap []Query

func (h MinHeap) Len() int {
    return len(h)
}

func (h MinHeap) Less(i, j int) bool {
    return h[i].height < h[j].height
}

func (h MinHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(Query))
}

func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func leftmostBuildingQueries(heights []int, queries [][]int) []int {
    n := len(heights)
    ans := make([]int, len(queries))

    pending := make([][]Query, n)

    for i, q := range queries {
        a, b := q[0], q[1]

        if a > b {
            a, b = b, a
        }

        if a == b {
            ans[i] = a
        } else if heights[a] < heights[b] {
            ans[i] = b
        } else {
            ans[i] = -1
            pending[b] = append(pending[b], Query{
                height: heights[a],
                index:  i,
            })
        }
    }

    h := &MinHeap{}
    heap.Init(h)

    for i := 0; i < n; i++ {
        for h.Len() > 0 && (*h)[0].height < heights[i] {
            q := heap.Pop(h).(Query)
            ans[q.index] = i
        }

        for _, q := range pending[i] {
            heap.Push(h, q)
        }
    }

    return ans
}