func eventualSafeNodes(graph [][]int) []int {
    n := len(graph)

    reverse := make([][]int, n)
    outdegree := make([]int, n)

    for i := 0; i < n; i++ {
        outdegree[i] = len(graph[i])

        for _, v := range graph[i] {
            reverse[v] = append(reverse[v], i)
        }
    }

    queue := []int{}

    for i := 0; i < n; i++ {
        if outdegree[i] == 0 {
            queue = append(queue, i)
        }
    }

    safe := make([]bool, n)

    for head := 0; head < len(queue); head++ {
        node := queue[head]
        safe[node] = true

        for _, prev := range reverse[node] {
            outdegree[prev]--

            if outdegree[prev] == 0 {
                queue = append(queue, prev)
            }
        }
    }

    result := []int{}

    for i := 0; i < n; i++ {
        if safe[i] {
            result = append(result, i)
        }
    }

    return result
}