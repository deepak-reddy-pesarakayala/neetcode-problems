type Edge struct {
    node int
    prob float64
}

type Item struct {
    node int
    prob float64
}

type MaxHeap []Item

func (h MaxHeap) Len() int {
    return len(h)
}

func (h MaxHeap) Less(i, j int) bool {
    return h[i].prob > h[j].prob
}

func (h MaxHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *MaxHeap) Push(x interface{}) {
    *h = append(*h, x.(Item))
}

func (h *MaxHeap) Pop() interface{} {
    old := *h
    n := len(old)
    item := old[n-1]
    *h = old[:n-1]
    return item
}

func maxProbability(n int, edges [][]int, succProb []float64, start int, end int) float64 {
    adj := make([][]Edge, n)

    for i, e := range edges {
        u, v := e[0], e[1]
        p := succProb[i]

        adj[u] = append(adj[u], Edge{v, p})
        adj[v] = append(adj[v], Edge{u, p})
    }

    prob := make([]float64, n)
    prob[start] = 1.0

    h := &MaxHeap{}
    heap.Init(h)
    heap.Push(h, Item{start, 1.0})

    for h.Len() > 0 {
        cur := heap.Pop(h).(Item)

        if cur.prob < prob[cur.node] {
            continue
        }

        if cur.node == end {
            return cur.prob
        }

        for _, edge := range adj[cur.node] {
            newProb := cur.prob * edge.prob

            if newProb > prob[edge.node] {
                prob[edge.node] = newProb
                heap.Push(h, Item{edge.node, newProb})
            }
        }
    }

    return 0.0
}
