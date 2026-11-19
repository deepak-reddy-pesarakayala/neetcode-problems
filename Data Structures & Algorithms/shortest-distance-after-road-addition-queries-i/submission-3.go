func shortestDistanceAfterQueries(n int, queries [][]int) []int {
    graph := make([][]int, n)

    for i := 0; i < n-1; i++ {
        graph[i] = append(graph[i], i+1)
    }

    result := make([]int, 0, len(queries))

    for _, q := range queries {
        u, v := q[0], q[1]
        graph[u] = append(graph[u], v)

        dist := make([]int, n)
        for i := range dist {
            dist[i] = -1
        }

        queue := []int{0}
        dist[0] = 0

        for head := 0; head < len(queue); head++ {
            node := queue[head]

            if node == n-1 {
                break
            }

            for _, next := range graph[node] {
                if dist[next] == -1 {
                    dist[next] = dist[node] + 1
                    queue = append(queue, next)
                }
            }
        }

        result = append(result, dist[n-1])
    }

    return result
}
