type Engineer struct {
    speed      int
    efficiency int
}

type MinHeap []int

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(int))
}

func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func maxPerformance(n int, speed []int, efficiency []int, k int) int {
    engineers := make([]Engineer, n)

    for i := 0; i < n; i++ {
        engineers[i] = Engineer{speed[i], efficiency[i]}
    }

    sort.Slice(engineers, func(i, j int) bool {
        return engineers[i].efficiency > engineers[j].efficiency
    })

    h := &MinHeap{}
    heap.Init(h)

    var speedSum int64
    var best int64

    const mod int64 = 1000000007

    for _, e := range engineers {
        heap.Push(h, e.speed)
        speedSum += int64(e.speed)

        if h.Len() > k {
            speedSum -= int64(heap.Pop(h).(int))
        }

        performance := speedSum * int64(e.efficiency)

        if performance > best {
            best = performance
        }
    }

    return int(best % mod)
}
