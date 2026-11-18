func maximumDetonation(bombs [][]int) int {
    n := len(bombs)
    graph := make([][]int, n)

    for i := 0; i < n; i++ {
        for j := 0; j < n; j++ {
            if i == j {
                continue
            }

            dx := int64(bombs[i][0] - bombs[j][0])
            dy := int64(bombs[i][1] - bombs[j][1])
            r := int64(bombs[i][2])

            if dx*dx+dy*dy <= r*r {
                graph[i] = append(graph[i], j)
            }
        }
    }

    var dfs func(int, []bool) int
    dfs = func(node int, visited []bool) int {
        visited[node] = true
        count := 1

        for _, next := range graph[node] {
            if !visited[next] {
                count += dfs(next, visited)
            }
        }

        return count
    }

    answer := 0

    for i := 0; i < n; i++ {
        visited := make([]bool, n)
        count := dfs(i, visited)

        if count > answer {
            answer = count
        }
    }

    return answer
}