func minimumTime(n int, relations [][]int, time []int) int {
    graph := make([][]int, n+1)
    indegree := make([]int, n+1)

    for _, r := range relations {
        u, v := r[0], r[1]
        graph[u] = append(graph[u], v)
        indegree[v]++
    }

    dp := make([]int, n+1)
    queue := []int{}

    for i := 1; i <= n; i++ {
        dp[i] = time[i-1]

        if indegree[i] == 0 {
            queue = append(queue, i)
        }
    }

    answer := 0

    for head := 0; head < len(queue); head++ {
        node := queue[head]

        if dp[node] > answer {
            answer = dp[node]
        }

        for _, next := range graph[node] {
            if dp[next] < dp[node]+time[next-1] {
                dp[next] = dp[node] + time[next-1]
            }

            indegree[next]--

            if indegree[next] == 0 {
                queue = append(queue, next)
            }
        }
    }

    return answer
}
