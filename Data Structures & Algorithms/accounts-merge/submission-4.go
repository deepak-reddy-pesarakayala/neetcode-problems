func accountsMerge(accounts [][]string) [][]string {
    n := len(accounts)
    parent := make([]int, n)

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

    union := func(a, b int) {
        rootA := find(a)
        rootB := find(b)

        if rootA != rootB {
            parent[rootB] = rootA
        }
    }

    emailOwner := make(map[string]int)

    for i, account := range accounts {
        for j := 1; j < len(account); j++ {
            email := account[j]

            if owner, exists := emailOwner[email]; exists {
                union(i, owner)
            } else {
                emailOwner[email] = i
            }
        }
    }

    merged := make(map[int][]string)

    for email, owner := range emailOwner {
        root := find(owner)
        merged[root] = append(merged[root], email)
    }

    result := [][]string{}

    for root, emails := range merged {
        sort.Strings(emails)

        account := []string{accounts[root][0]}
        account = append(account, emails...)

        result = append(result, account)
    }

    return result
}