type Edge struct {
    node int
    time int
}

type Item struct {
    node int
    dist int
}

type MinHeap []Item

func (h MinHeap) Len() int {
    return len(h)
}

func (h MinHeap) Less(i, j int) bool {
    return h[i].dist < h[j].dist
}

func (h MinHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(Item))
}

func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    item := old[n-1]
    *h = old[:n-1]
    return item
}

func networkDelayTime(times [][]int, n int, k int) int {
    adj := make([][]Edge, n+1)

    for _, t := range times {
        u, v, w := t[0], t[1], t[2]
        adj[u] = append(adj[u], Edge{v, w})
    }

    dist := make([]int, n+1)
    for i := 1; i <= n; i++ {
        dist[i] = int(^uint(0) >> 1)
    }

    dist[k] = 0

    h := &MinHeap{}
    heap.Init(h)
    heap.Push(h, Item{k, 0})

    for h.Len() > 0 {
        cur := heap.Pop(h).(Item)

        if cur.dist > dist[cur.node] {
            continue
        }

        for _, edge := range adj[cur.node] {
            newDist := cur.dist + edge.time

            if newDist < dist[edge.node] {
                dist[edge.node] = newDist
                heap.Push(h, Item{edge.node, newDist})
            }
        }
    }

    ans := 0

    for i := 1; i <= n; i++ {
        if dist[i] == int(^uint(0)>>1) {
            return -1
        }
        ans = max(ans, dist[i])
    }

    return ans
}
