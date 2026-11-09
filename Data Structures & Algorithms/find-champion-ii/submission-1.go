func findChampion(n int, edges [][]int) int {
    indegree := make([]int, n)

    for _, edge := range edges {
        indegree[edge[1]]++
    }

    champion := -1

    for i := 0; i < n; i++ {
        if indegree[i] == 0 {
            if champion != -1 {
                return -1
            }
            champion = i
        }
    }

    return champion
}