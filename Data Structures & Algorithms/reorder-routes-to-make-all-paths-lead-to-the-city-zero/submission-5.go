func minReorder(n int, connections [][]int) int {
    graph := make([][][2]int, n)

    for _, edge := range connections {
        u, v := edge[0], edge[1]
        graph[u] = append(graph[u], [2]int{v, 1})
        graph[v] = append(graph[v], [2]int{u, 0})
    }

    visited := make([]bool, n)
    stack := []int{0}
    visited[0] = true
    count := 0

    for len(stack) > 0 {
        node := stack[len(stack)-1]
        stack = stack[:len(stack)-1]

        for _, edge := range graph[node] {
            next := edge[0]
            cost := edge[1]

            if !visited[next] {
                visited[next] = true
                count += cost
                stack = append(stack, next)
            }
        }
    }

    return count
}