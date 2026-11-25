func minimumCost(source string, target string, original []byte, changed []byte, cost []int) int64 {
    const INF int64 = 1 << 60

    dist := make([][]int64, 26)
    for i := 0; i < 26; i++ {
        dist[i] = make([]int64, 26)
        for j := 0; j < 26; j++ {
            dist[i][j] = INF
        }
        dist[i][i] = 0
    }

    for i := 0; i < len(original); i++ {
        u := int(original[i] - 'a')
        v := int(changed[i] - 'a')
        w := int64(cost[i])

        if w < dist[u][v] {
            dist[u][v] = w
        }
    }

    for k := 0; k < 26; k++ {
        for i := 0; i < 26; i++ {
            for j := 0; j < 26; j++ {
                if dist[i][k] != INF && dist[k][j] != INF {
                    if dist[i][k]+dist[k][j] < dist[i][j] {
                        dist[i][j] = dist[i][k] + dist[k][j]
                    }
                }
            }
        }
    }

    var total int64

    for i := 0; i < len(source); i++ {
        u := int(source[i] - 'a')
        v := int(target[i] - 'a')

        if dist[u][v] == INF {
            return -1
        }

        total += dist[u][v]
    }

    return total
}