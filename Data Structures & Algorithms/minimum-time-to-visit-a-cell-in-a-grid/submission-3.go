import "container/heap"
type Cell struct {
    r, c, time int
}

type MinHeap []Cell

func (h MinHeap) Len() int { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i].time < h[j].time }
func (h MinHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(Cell))
}

func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

func minimumTime(grid [][]int) int {
    m, n := len(grid), len(grid[0])

    if grid[0][1] > 1 && grid[1][0] > 1 {
        return -1
    }

    dirs := [][2]int{{0, 1}, {0, -1}, {1, 0}, {-1, 0}}

    dist := make([][]int, m)
    for i := range dist {
        dist[i] = make([]int, n)
        for j := range dist[i] {
            dist[i][j] = int(^uint(0) >> 1)
        }
    }

    dist[0][0] = 0
    h := &MinHeap{{0, 0, 0}}
    heap.Init(h)

    for h.Len() > 0 {
        cur := heap.Pop(h).(Cell)

        if cur.time != dist[cur.r][cur.c] {
            continue
        }

        if cur.r == m-1 && cur.c == n-1 {
            return cur.time
        }

        for _, d := range dirs {
            nr, nc := cur.r+d[0], cur.c+d[1]

            if nr < 0 || nr >= m || nc < 0 || nc >= n {
                continue
            }

            nextTime := cur.time + 1

            if nextTime < grid[nr][nc] {
                wait := grid[nr][nc] - nextTime
                if wait%2 == 1 {
                    wait++
                }
                nextTime += wait
            }

            if nextTime < dist[nr][nc] {
                dist[nr][nc] = nextTime
                heap.Push(h, Cell{nr, nc, nextTime})
            }
        }
    }

    return -1
}