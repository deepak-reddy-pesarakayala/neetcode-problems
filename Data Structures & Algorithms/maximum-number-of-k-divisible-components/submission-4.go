func maxKDivisibleComponents(n int, edges [][]int, values []int, k int) int {
    graph := make([][]int, n)

    for _, edge := range edges {
        u, v := edge[0], edge[1]
        graph[u] = append(graph[u], v)
        graph[v] = append(graph[v], u)
    }

    parent := make([]int, n)
    for i := range parent {
        parent[i] = -1
    }

    order := []int{0}
    parent[0] = 0

    for i := 0; i < len(order); i++ {
        node := order[i]

        for _, next := range graph[node] {
            if parent[next] == -1 {
                parent[next] = node
                order = append(order, next)
            }
        }
    }

    sums := make([]int64, n)
    for i := 0; i < n; i++ {
        sums[i] = int64(values[i]) % int64(k)
    }

    answer := 0

    for i := n - 1; i >= 0; i-- {
        node := order[i]

        if sums[node]%int64(k) == 0 {
            answer++
        }

        if node != 0 {
            sums[parent[node]] += sums[node]
            sums[parent[node]] %= int64(k)
        }
    }

    return answer
}
