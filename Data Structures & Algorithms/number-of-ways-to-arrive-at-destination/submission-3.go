import priorityqueue "container/heap"

const MOD = 1000000007

type Edge struct {
    to   int
    time int64
}

type Item struct {
    node int
    dist int64
}

type MinHeap []Item

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i].dist < h[j].dist }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(Item))
}

func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func countPaths(n int, roads [][]int) int {
    graph := make([][]Edge, n)

    for _, road := range roads {
        u, v := road[0], road[1]
        w := int64(road[2])
        graph[u] = append(graph[u], Edge{v, w})
        graph[v] = append(graph[v], Edge{u, w})
    }

    const INF int64 = 1 << 62

    dist := make([]int64, n)
    ways := make([]int64, n)

    for i := range dist {
        dist[i] = INF
    }

    dist[0] = 0
    ways[0] = 1

    h := &MinHeap{{0, 0}}
    priorityqueue.Init(h)

    for h.Len() > 0 {
        cur := priorityqueue.Pop(h).(Item)

        if cur.dist > dist[cur.node] {
            continue
        }

        for _, edge := range graph[cur.node] {
            nextDist := cur.dist + edge.time

            if nextDist < dist[edge.to] {
                dist[edge.to] = nextDist
                ways[edge.to] = ways[cur.node]
                priorityqueue.Push(h, Item{edge.to, nextDist})
            } else if nextDist == dist[edge.to] {
                ways[edge.to] = (ways[edge.to] + ways[cur.node]) % MOD
            }
        }
    }

    return int(ways[n-1])
}