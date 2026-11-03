type MaxHeap []int

func (h MaxHeap) Len() int           { return len(h) }
func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h MaxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
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

func minimumDeviation(nums []int) int {
    h := &MaxHeap{}
    minVal := int(^uint(0) >> 1)

    for _, num := range nums {
        if num%2 == 1 {
            num *= 2
        }
        heap.Push(h, num)

        if num < minVal {
            minVal = num
        }
    }

    heap.Init(h)
    result := int(^uint(0) >> 1)

    for {
        maxVal := (*h)[0]
        deviation := maxVal - minVal

        if deviation < result {
            result = deviation
        }

        if maxVal%2 == 1 {
            break
        }

        heap.Pop(h)
        nextVal := maxVal / 2

        if nextVal < minVal {
            minVal = nextVal
        }

        heap.Push(h, nextVal)
    }

    return result
}