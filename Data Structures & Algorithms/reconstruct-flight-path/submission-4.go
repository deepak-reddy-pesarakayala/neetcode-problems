func findItinerary(tickets [][]string) []string {
    adj := make(map[string][]string)

    for _, ticket := range tickets {
        from, to := ticket[0], ticket[1]
        adj[from] = append(adj[from], to)
    }

    for from := range adj {
        sort.Sort(sort.Reverse(sort.StringSlice(adj[from])))
    }

    result := []string{}

    var dfs func(string)
    dfs = func(airport string) {
        for len(adj[airport]) > 0 {
            n := len(adj[airport])
            next := adj[airport][n-1]
            adj[airport] = adj[airport][:n-1]
            dfs(next)
        }

        result = append(result, airport)
    }

    dfs("JFK")

    for i, j := 0, len(result)-1; i < j; i, j = i+1, j-1 {
        result[i], result[j] = result[j], result[i]
    }

    return result
}
