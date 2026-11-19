func findMinHeightTrees(n int, edges [][]int) []int {
    if n == 1 {
        return []int{0}
    }

    graph := make([][]int, n)
    degree := make([]int, n)

    for _, edge := range edges {
        u, v := edge[0], edge[1]
        graph[u] = append(graph[u], v)
        graph[v] = append(graph[v], u)
        degree[u]++
        degree[v]++
    }

    queue := []int{}

    for i := 0; i < n; i++ {
        if degree[i] == 1 {
            queue = append(queue, i)
        }
    }

    remaining := n

    for remaining > 2 {
        size := len(queue)
        remaining -= size

        for i := 0; i < size; i++ {
            node := queue[0]
            queue = queue[1:]

            for _, next := range graph[node] {
                degree[next]--

                if degree[next] == 1 {
                    queue = append(queue, next)
                }
            }
        }
    }

    return queue
}

