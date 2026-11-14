func findRedundantConnection(edges [][]int) []int {
    n := len(edges)
    parent := make([]int, n+1)
    rank := make([]int, n+1)

    for i := 1; i <= n; i++ {
        parent[i] = i
    }

    var find func(int) int
    find = func(x int) int {
        if parent[x] != x {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    for _, edge := range edges {
        u, v := edge[0], edge[1]

        rootU := find(u)
        rootV := find(v)

        if rootU == rootV {
            return edge
        }

        if rank[rootU] < rank[rootV] {
            parent[rootU] = rootV
        } else if rank[rootU] > rank[rootV] {
            parent[rootV] = rootU
        } else {
            parent[rootV] = rootU
            rank[rootU]++
        }
    }

    return []int{}
}