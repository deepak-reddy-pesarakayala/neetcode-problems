func minimumFuelCost(roads [][]int, seats int) int64 {
    n := len(roads) + 1

    graph := make([][]int, n)

    for _, road := range roads {
        u, v := road[0], road[1]
        graph[u] = append(graph[u], v)
        graph[v] = append(graph[v], u)
    }

    var fuel int64

    var dfs func(int, int) int64
    dfs = func(node, parent int) int64 {
        people := int64(1)

        for _, next := range graph[node] {
            if next == parent {
                continue
            }

            childPeople := dfs(next, node)
            cars := (childPeople + int64(seats) - 1) / int64(seats)

            fuel += cars
            people += childPeople
        }

        return people
    }

    dfs(0, -1)

    return fuel
}