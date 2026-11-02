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

func furthestBuilding(heights []int, bricks int, ladders int) int {
    h := &MinHeap{}
    heap.Init(h)

    for i := 0; i < len(heights)-1; i++ {
        climb := heights[i+1] - heights[i]

        if climb > 0 {
            heap.Push(h, climb)

            if h.Len() > ladders {
                bricks -= heap.Pop(h).(int)
            }

            if bricks < 0 {
                return i
            }
        }
    }

    return len(heights) - 1
}