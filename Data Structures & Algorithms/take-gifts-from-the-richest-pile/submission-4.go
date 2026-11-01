type MaxHeap []int

func (h MaxHeap) Len() int {
    return len(h)
}

func (h MaxHeap) Less(i, j int) bool {
    return h[i] > h[j]
}

func (h MaxHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *MaxHeap) Push(x interface{}) {
    *h = append(*h, x.(int))
}

func (h *MaxHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func pickGifts(gifts []int, k int) int64 {
    h := MaxHeap(gifts)
    heap.Init(&h)

    for i := 0; i < k; i++ {
        maxVal := heap.Pop(&h).(int)
        remaining := int(math.Sqrt(float64(maxVal)))
        heap.Push(&h, remaining)
    }

    var total int64
    for _, val := range h {
        total += int64(val)
    }

    return total
}