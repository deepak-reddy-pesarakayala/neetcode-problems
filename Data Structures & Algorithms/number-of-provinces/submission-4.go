func findCircleNum(isConnected [][]int) int {
    n := len(isConnected)
    visited := make([]bool, n)
    provinces := 0

    var dfs func(int)
    dfs = func(city int) {
        visited[city] = true

        for next := 0; next < n; next++ {
            if isConnected[city][next] == 1 && !visited[next] {
                dfs(next)
            }
        }
    }

    for i := 0; i < n; i++ {
        if !visited[i] {
            provinces++
            dfs(i)
        }
    }

    return provinces
}