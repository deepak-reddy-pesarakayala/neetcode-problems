func maxNumEdgesToRemove(n int, edges [][]int) int {
    parentA := make([]int, n+1)
    parentB := make([]int, n+1)
    rankA := make([]int, n+1)
    rankB := make([]int, n+1)

    for i := 1; i <= n; i++ {
        parentA[i] = i
        parentB[i] = i
    }

    var find func([]int, int) int
    find = func(parent []int, x int) int {
        if parent[x] != x {
            parent[x] = find(parent, parent[x])
        }
        return parent[x]
    }

    union := func(parent, rank []int, u, v int) bool {
        pu := find(parent, u)
        pv := find(parent, v)

        if pu == pv {
            return false
        }

        if rank[pu] < rank[pv] {
            pu, pv = pv, pu
        }

        parent[pv] = pu
        if rank[pu] == rank[pv] {
            rank[pu]++
        }

        return true
    }

    used := 0

    for _, e := range edges {
        if e[0] == 3 {
            a := union(parentA, rankA, e[1], e[2])
            b := union(parentB, rankB, e[1], e[2])

            if a || b {
                used++
            }
        }
    }

    for _, e := range edges {
        if e[0] == 1 {
            if union(parentA, rankA, e[1], e[2]) {
                used++
            }
        } else if e[0] == 2 {
            if union(parentB, rankB, e[1], e[2]) {
                used++
            }
        }
    }

    rootA := find(parentA, 1)
    rootB := find(parentB, 1)

    for i := 2; i <= n; i++ {
        if find(parentA, i) != rootA || find(parentB, i) != rootB {
            return -1
        }
    }

    return len(edges) - used
}