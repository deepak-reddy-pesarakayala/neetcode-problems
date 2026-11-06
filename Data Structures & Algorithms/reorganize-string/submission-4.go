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

func reorganizeString(s string) string {
    freq := make([]int, 26)

    for i := 0; i < len(s); i++ {
        freq[s[i]-'a']++
    }

    maxFreq := 0
    for _, count := range freq {
        if count > maxFreq {
            maxFreq = count
        }
    }

    if maxFreq > (len(s)+1)/2 {
        return ""
    }

    h := &MaxHeap{}
    heap.Init(h)

    for i, count := range freq {
        if count > 0 {
            heap.Push(h, CharFreq{byte('a' + i), count})
        }
    }

    result := make([]byte, 0, len(s))

    for h.Len() > 1 {
        first := heap.Pop(h).(CharFreq)
        second := heap.Pop(h).(CharFreq)

        result = append(result, first.char, second.char)

        first.freq--
        second.freq--

        if first.freq > 0 {
            heap.Push(h, first)
        }
        if second.freq > 0 {
            heap.Push(h, second)
        }
    }

    if h.Len() == 1 {
        last := heap.Pop(h).(CharFreq)
        result = append(result, last.char)
    }

    return string(result)
}