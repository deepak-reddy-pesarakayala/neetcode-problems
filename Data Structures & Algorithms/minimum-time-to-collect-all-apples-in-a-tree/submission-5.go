func minTime(n int, edges [][]int, hasApple []bool) int {
	graph := make([][]int, n)

	for _, edge := range edges {
		u, v := edge[0], edge[1]
		graph[u] = append(graph[u], v)
		graph[v] = append(graph[v], u)
	}

	var dfs func(int, int) int
	dfs = func(node, parent int) int {
		time := 0

		for _, child := range graph[node] {
			if child == parent {
				continue
			}

			childTime := dfs(child, node)
			if childTime > 0 || hasApple[child] {
				time += childTime + 2
			}
		}

		return time
	}

	return dfs(0, -1)
}