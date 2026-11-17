func isBipartite(graph [][]int) bool {
    n := len(graph)
    color := make([]int, n)

    for i := 0; i < n; i++ {
        if color[i] != 0 {
            continue
        }

        queue := []int{i}
        color[i] = 1

        for head := 0; head < len(queue); head++ {
            node := queue[head]

            for _, next := range graph[node] {
                if color[next] == 0 {
                    color[next] = -color[node]
                    queue = append(queue, next)
                } else if color[next] == color[node] {
                    return false
                }
            }
        }
    }

    return true
}