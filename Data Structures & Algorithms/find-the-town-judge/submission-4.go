func findJudge(n int, trust [][]int) int {
    degree := make([]int, n+1)

    for _, t := range trust {
        degree[t[0]]--
        degree[t[1]]++
    }

    for i := 1; i <= n; i++ {
        if degree[i] == n-1 {
            return i
        }
    }

    return -1
}