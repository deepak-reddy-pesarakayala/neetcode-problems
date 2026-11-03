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

type SeatManager struct {
    available *MinHeap
}

func Constructor(n int) SeatManager {
    h := &MinHeap{}
    for i := 1; i <= n; i++ {
        *h = append(*h, i)
    }
    heap.Init(h)

    return SeatManager{
        available: h,
    }
}

func (this *SeatManager) Reserve() int {
    return heap.Pop(this.available).(int)
}

func (this *SeatManager) Unreserve(seatNumber int) {
    heap.Push(this.available, seatNumber)
}