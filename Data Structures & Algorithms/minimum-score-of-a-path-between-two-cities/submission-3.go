func minScore(n int, roads [][]int) int {
    graph := make([][][]int, n+1)

    for _, road := range roads {
        u, v, w := road[0], road[1], road[2]
        graph[u] = append(graph[u], []int{v, w})
        graph[v] = append(graph[v], []int{u, w})
    }

    visited := make([]bool, n+1)
    answer := int(^uint(0) >> 1)

    var dfs func(int)
    dfs = func(node int) {
        visited[node] = true

        for _, edge := range graph[node] {
            next, distance := edge[0], edge[1]

            if distance < answer {
                answer = distance
            }

            if !visited[next] {
                dfs(next)
            }
        }
    }

    dfs(1)
    return answer
}