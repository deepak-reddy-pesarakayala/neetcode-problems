func shortestAlternatingPaths(n int, redEdges [][]int, blueEdges [][]int) []int {
    red := make([][]int, n)
    blue := make([][]int, n)

    for _, e := range redEdges {
        red[e[0]] = append(red[e[0]], e[1])
    }

    for _, e := range blueEdges {
        blue[e[0]] = append(blue[e[0]], e[1])
    }

    dist := make([][2]int, n)
    for i := 0; i < n; i++ {
        dist[i] = [2]int{-1, -1}
    }

    queue := [][2]int{{0, 0}, {0, 1}}
    dist[0][0] = 0
    dist[0][1] = 0

    for head := 0; head < len(queue); head++ {
        node := queue[head][0]
        color := queue[head][1]

        if color == 0 {
            for _, next := range blue[node] {
                if dist[next][1] == -1 {
                    dist[next][1] = dist[node][0] + 1
                    queue = append(queue, [2]int{next, 1})
                }
            }
        } else {
            for _, next := range red[node] {
                if dist[next][0] == -1 {
                    dist[next][0] = dist[node][1] + 1
                    queue = append(queue, [2]int{next, 0})
                }
            }
        }
    }

    answer := make([]int, n)

    for i := 0; i < n; i++ {
        r, b := dist[i][0], dist[i][1]

        if r == -1 {
            answer[i] = b
        } else if b == -1 {
            answer[i] = r
        } else if r < b {
            answer[i] = r
        } else {
            answer[i] = b
        }
    }

    return answer
}