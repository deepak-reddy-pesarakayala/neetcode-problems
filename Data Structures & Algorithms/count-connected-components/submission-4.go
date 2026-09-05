func countComponents(n int, edges [][]int) int {
	parent := make([]int, n)
	size := make([]int, n)
    for i := 0; i < n; i++ {
		parent[i] = i
		size[i] = 1
	}
	var find func(int) int
	find = func(x int) int {
		if parent[x] != x {
			parent[x] = find(parent[x])
		}
		return parent[x]
	}
    union := func(a, b int) bool {
		rootA := find(a)
		rootB := find(b)
        if rootA == rootB {
			return false
		}
        if size[rootA] < size[rootB] {
			rootA, rootB = rootB, rootA
		}
		parent[rootB] = rootA
		size[rootA] += size[rootB]
        return true
	}
    components := n
    for _, edge := range edges {
		if union(edge[0], edge[1]) {
			components--
		}
	}
    return components
}
