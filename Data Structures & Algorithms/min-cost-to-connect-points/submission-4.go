func minCostConnectPoints(points [][]int) int {
    n := len(points)
    visited := make([]bool, n)
    dist := make([]int, n)

    for i := range dist {
        dist[i] = int(^uint(0) >> 1)
    }

    dist[0] = 0
    total := 0

    for count := 0; count < n; count++ {
        u := -1

        for i := 0; i < n; i++ {
            if !visited[i] && (u == -1 || dist[i] < dist[u]) {
                u = i
            }
        }

        visited[u] = true
        total += dist[u]

        for v := 0; v < n; v++ {
            if !visited[v] {
                dx := points[u][0] - points[v][0]
                dy := points[u][1] - points[v][1]

                if dx < 0 {
                    dx = -dx
                }
                if dy < 0 {
                    dy = -dy
                }

                cost := dx + dy

                if cost < dist[v] {
                    dist[v] = cost
                }
            }
        }
    }

    return total
}
