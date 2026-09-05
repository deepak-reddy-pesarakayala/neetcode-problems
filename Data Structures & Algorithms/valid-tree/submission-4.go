func validTree(n int, edges [][]int) bool {
	if len(edges) != n-1 {
		return false
	}

	parent := make([]int, n)
	rank := make([]int, n)

	for i := 0; i < n; i++ {
		parent[i] = i
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

		if rank[rootA] < rank[rootB] {
			parent[rootA] = rootB
		} else if rank[rootA] > rank[rootB] {
			parent[rootB] = rootA
		} else {
			parent[rootB] = rootA
			rank[rootA]++
		}

		return true
	}

	for _, edge := range edges {
		if !union(edge[0], edge[1]) {
			return false
		}
	}

	return true
}