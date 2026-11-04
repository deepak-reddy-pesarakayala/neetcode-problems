type Server struct {
    weight int
    index  int
}

type BusyServer struct {
    weight int
    index  int
    freeAt int64
}

type AvailableHeap []Server

func (h AvailableHeap) Len() int { return len(h) }
func (h AvailableHeap) Less(i, j int) bool {
    if h[i].weight == h[j].weight {
        return h[i].index < h[j].index
    }
    return h[i].weight < h[j].weight
}
func (h AvailableHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *AvailableHeap) Push(x interface{}) {
    *h = append(*h, x.(Server))
}
func (h *AvailableHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

type BusyHeap []BusyServer

func (h BusyHeap) Len() int { return len(h) }
func (h BusyHeap) Less(i, j int) bool {
    if h[i].freeAt == h[j].freeAt {
        if h[i].weight == h[j].weight {
            return h[i].index < h[j].index
        }
        return h[i].weight < h[j].weight
    }
    return h[i].freeAt < h[j].freeAt
}
func (h BusyHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *BusyHeap) Push(x interface{}) {
    *h = append(*h, x.(BusyServer))
}
func (h *BusyHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func assignTasks(servers []int, tasks []int) []int {
    available := &AvailableHeap{}
    busy := &BusyHeap{}

    heap.Init(available)
    heap.Init(busy)

    for i, weight := range servers {
        heap.Push(available, Server{weight, i})
    }

    result := make([]int, len(tasks))
    var time int64

    for j, task := range tasks {
        if time < int64(j) {
            time = int64(j)
        }

        for busy.Len() > 0 && (*busy)[0].freeAt <= time {
            server := heap.Pop(busy).(BusyServer)
            heap.Push(available, Server{server.weight, server.index})
        }

        if available.Len() == 0 {
            time = (*busy)[0].freeAt

            for busy.Len() > 0 && (*busy)[0].freeAt <= time {
                server := heap.Pop(busy).(BusyServer)
                heap.Push(available, Server{server.weight, server.index})
            }
        }

        server := heap.Pop(available).(Server)
        result[j] = server.index

        heap.Push(busy, BusyServer{
            weight: server.weight,
            index:  server.index,
            freeAt: time + int64(task),
        })
    }

    return result
}