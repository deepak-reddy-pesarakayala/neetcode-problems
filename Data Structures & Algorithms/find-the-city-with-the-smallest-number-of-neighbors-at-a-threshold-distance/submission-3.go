func findTheCity(n int, edges [][]int, distanceThreshold int) int {
    const INF = int(1 << 60)

    dist := make([][]int, n)
    for i := 0; i < n; i++ {
        dist[i] = make([]int, n)
        for j := 0; j < n; j++ {
            dist[i][j] = INF
        }
        dist[i][i] = 0
    }

    for _, e := range edges {
        from, to, weight := e[0], e[1], e[2]
        dist[from][to] = weight
        dist[to][from] = weight
    }

    for k := 0; k < n; k++ {
        for i := 0; i < n; i++ {
            for j := 0; j < n; j++ {
                if dist[i][k] != INF && dist[k][j] != INF {
                    if dist[i][k]+dist[k][j] < dist[i][j] {
                        dist[i][j] = dist[i][k] + dist[k][j]
                    }
                }
            }
        }
    }

    result := -1
    minCount := INF

    for i := 0; i < n; i++ {
        count := 0

        for j := 0; j < n; j++ {
            if i != j && dist[i][j] <= distanceThreshold {
                count++
            }
        }

        if count <= minCount {
            minCount = count
            result = i
        }
    }

    return result
}