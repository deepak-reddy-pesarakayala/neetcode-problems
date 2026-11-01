type Pair struct {
    value int
    index int
}

type MinHeap []Pair

func (h MinHeap) Len() int {
    return len(h)
}

func (h MinHeap) Less(i, j int) bool {
    if h[i].value == h[j].value {
        return h[i].index < h[j].index
    }
    return h[i].value < h[j].value
}

func (h MinHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(Pair))
}

func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func getFinalState(nums []int, k int, multiplier int) []int {
    h := MinHeap{}

    for i, num := range nums {
        heap.Push(&h, Pair{num, i})
    }

    for i := 0; i < k; i++ {
        min := heap.Pop(&h).(Pair)
        min.value *= multiplier
        nums[min.index] = min.value
        heap.Push(&h, min)
    }

    return nums
}