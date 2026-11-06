type CharFreq struct {
    char byte
    freq int
}

type MaxHeap []CharFreq

func (h MaxHeap) Len() int { return len(h) }
func (h MaxHeap) Less(i, j int) bool {
    return h[i].freq > h[j].freq
}
func (h MaxHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}
func (h *MaxHeap) Push(x interface{}) {
    *h = append(*h, x.(CharFreq))
}
func (h *MaxHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func longestDiverseString(a int, b int, c int) string {
    h := &MaxHeap{}

    if a > 0 {
        heap.Push(h, CharFreq{'a', a})
    }
    if b > 0 {
        heap.Push(h, CharFreq{'b', b})
    }
    if c > 0 {
        heap.Push(h, CharFreq{'c', c})
    }

    result := make([]byte, 0, a+b+c)

    for h.Len() > 0 {
        first := heap.Pop(h).(CharFreq)

        n := len(result)
        if n >= 2 && result[n-1] == first.char && result[n-2] == first.char {
            if h.Len() == 0 {
                break
            }

            second := heap.Pop(h).(CharFreq)
            result = append(result, second.char)
            second.freq--

            if second.freq > 0 {
                heap.Push(h, second)
            }

            heap.Push(h, first)
        } else {
            result = append(result, first.char)
            first.freq--

            if first.freq > 0 {
                heap.Push(h, first)
            }
        }
    }

    return string(result)
}