func countCompleteComponents(n int, edges [][]int) int {
    graph := make([][]int, n)

    for _, edge := range edges {
        u, v := edge[0], edge[1]
        graph[u] = append(graph[u], v)
        graph[v] = append(graph[v], u)
    }

    visited := make([]bool, n)
    count := 0

    var dfs func(int) (int, int)
    dfs = func(node int) (int, int) {
        visited[node] = true
        vertices := 1
        degree := len(graph[node])

        for _, next := range graph[node] {
            if !visited[next] {
                v, d := dfs(next)
                vertices += v
                degree += d
            }
        }

        return vertices, degree
    }

    for i := 0; i < n; i++ {
        if !visited[i] {
            vertices, degree := dfs(i)
            edgeCount := degree / 2

            if edgeCount == vertices*(vertices-1)/2 {
                count++
            }
        }
    }

    return count
}