func minimumCost(n int, edges [][]int, query [][]int) []int {
    parent := make([]int, n)
    size := make([]int, n)
    cost := make([]int, n)

    for i := 0; i < n; i++ {
        parent[i] = i
        size[i] = 1
        cost[i] = -1
    }

    var find func(int) int
    find = func(x int) int {
        if parent[x] != x {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    for _, e := range edges {
        u, v, w := e[0], e[1], e[2]
        ru, rv := find(u), find(v)

        if ru != rv {
            if size[ru] < size[rv] {
                ru, rv = rv, ru
            }
            parent[rv] = ru
            size[ru] += size[rv]
            cost[ru] &= cost[rv]
        }

        root := find(u)
        cost[root] &= w
    }

    ans := make([]int, len(query))

    for i, q := range query {
        u, v := q[0], q[1]
        ru, rv := find(u), find(v)

        if ru != rv {
            ans[i] = -1
        } else {
            ans[i] = cost[ru]
        }
    }

    return ans
}