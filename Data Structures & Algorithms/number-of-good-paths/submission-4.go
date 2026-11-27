func numberOfGoodPaths(vals []int, edges [][]int) int {
    n := len(vals)

    parent := make([]int, n)
    count := make([]int, n)

    for i := 0; i < n; i++ {
        parent[i] = i
        count[i] = 1
    }

    var find func(int) int
    find = func(x int) int {
        if parent[x] != x {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    sort.Slice(edges, func(i, j int) bool {
        a := max(vals[edges[i][0]], vals[edges[i][1]])
        b := max(vals[edges[j][0]], vals[edges[j][1]])
        return a < b
    })

    ans := n

    for _, e := range edges {
        u, v := e[0], e[1]
        ru, rv := find(u), find(v)

        if ru == rv {
            continue
        }

        if vals[ru] < vals[rv] {
            ru, rv = rv, ru
        }

        if vals[ru] == vals[rv] {
            ans += count[ru] * count[rv]
            count[ru] += count[rv]
        }

        parent[rv] = ru
    }

    return ans
}