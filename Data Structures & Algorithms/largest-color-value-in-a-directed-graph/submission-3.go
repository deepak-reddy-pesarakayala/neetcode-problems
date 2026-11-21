func largestPathValue(colors string, edges [][]int) int {
    n := len(colors)

    graph := make([][]int, n)
    indegree := make([]int, n)

    for _, edge := range edges {
        u, v := edge[0], edge[1]
        graph[u] = append(graph[u], v)
        indegree[v]++
    }

    dp := make([][26]int, n)
    queue := []int{}

    for i := 0; i < n; i++ {
        if indegree[i] == 0 {
            queue = append(queue, i)
        }
    }

    answer := 0
    processed := 0

    for head := 0; head < len(queue); head++ {
        node := queue[head]
        processed++

        color := int(colors[node] - 'a')
        dp[node][color]++

        if dp[node][color] > answer {
            answer = dp[node][color]
        }

        for _, next := range graph[node] {
            for c := 0; c < 26; c++ {
                if dp[next][c] < dp[node][c] {
                    dp[next][c] = dp[node][c]
                }
            }

            indegree[next]--

            if indegree[next] == 0 {
                queue = append(queue, next)
            }
        }
    }

    if processed != n {
        return -1
    }

    return answer
}
