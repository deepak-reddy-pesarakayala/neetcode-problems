func findCheapestPrice(n int, flights [][]int, src int, dst int, k int) int {
    const INF = int(1 << 60)

    dist := make([]int, n)
    for i := range dist {
        dist[i] = INF
    }
    dist[src] = 0

    for i := 0; i <= k; i++ {
        temp := make([]int, n)
        copy(temp, dist)

        for _, f := range flights {
            from, to, price := f[0], f[1], f[2]

            if dist[from] != INF && dist[from]+price < temp[to] {
                temp[to] = dist[from] + price
            }
        }

        dist = temp
    }

    if dist[dst] == INF {
        return -1
    }

    return dist[dst]
}