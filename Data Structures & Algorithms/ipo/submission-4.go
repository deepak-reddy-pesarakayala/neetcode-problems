type Project struct {
    capital int
    profit  int
}

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

func findMaximizedCapital(k int, w int, profits []int, capital []int) int {
    n := len(profits)
    projects := make([]Project, n)

    for i := 0; i < n; i++ {
        projects[i] = Project{
            capital: capital[i],
            profit:  profits[i],
        }
    }

    sort.Slice(projects, func(i, j int) bool {
        return projects[i].capital < projects[j].capital
    })

    h := &MaxHeap{}
    heap.Init(h)

    currentCapital := w
    index := 0

    for i := 0; i < k; i++ {
        for index < n && projects[index].capital <= currentCapital {
            heap.Push(h, projects[index].profit)
            index++
        }

        if h.Len() == 0 {
            break
        }

        currentCapital += heap.Pop(h).(int)
    }

    return currentCapital
}