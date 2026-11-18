func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
    graph := make(map[string]map[string]float64)

    for i, equation := range equations {
        a, b := equation[0], equation[1]

        if graph[a] == nil {
            graph[a] = make(map[string]float64)
        }
        if graph[b] == nil {
            graph[b] = make(map[string]float64)
        }

        graph[a][b] = values[i]
        graph[b][a] = 1.0 / values[i]
    }

    var dfs func(string, string, map[string]bool) float64

    dfs = func(start, target string, visited map[string]bool) float64 {
        if _, exists := graph[start]; !exists {
            return -1.0
        }

        if start == target {
            return 1.0
        }

        visited[start] = true

        for next, value := range graph[start] {
            if !visited[next] {
                result := dfs(next, target, visited)

                if result != -1.0 {
                    return value * result
                }
            }
        }

        return -1.0
    }

    answer := make([]float64, len(queries))

    for i, query := range queries {
        visited := make(map[string]bool)
        answer[i] = dfs(query[0], query[1], visited)
    }

    return answer
}