type Task struct {
    enqueue int
    process int
    index   int
}

type MinHeap []Task

func (h MinHeap) Len() int { return len(h) }
func (h MinHeap) Less(i, j int) bool {
    if h[i].process == h[j].process {
        return h[i].index < h[j].index
    }
    return h[i].process < h[j].process
}
func (h MinHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(Task))
}
func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func getOrder(tasks [][]int) []int {
    n := len(tasks)
    sortedTasks := make([]Task, n)

    for i := 0; i < n; i++ {
        sortedTasks[i] = Task{
            enqueue: tasks[i][0],
            process: tasks[i][1],
            index:   i,
        }
    }

    sort.Slice(sortedTasks, func(i, j int) bool {
        return sortedTasks[i].enqueue < sortedTasks[j].enqueue
    })

    h := &MinHeap{}
    heap.Init(h)

    result := make([]int, 0, n)
    var time int64
    i := 0

    for i < n || h.Len() > 0 {
        if h.Len() == 0 && time < int64(sortedTasks[i].enqueue) {
            time = int64(sortedTasks[i].enqueue)
        }

        for i < n && int64(sortedTasks[i].enqueue) <= time {
            heap.Push(h, sortedTasks[i])
            i++
        }

        task := heap.Pop(h).(Task)
        result = append(result, task.index)
        time += int64(task.process)
    }

    return result
}