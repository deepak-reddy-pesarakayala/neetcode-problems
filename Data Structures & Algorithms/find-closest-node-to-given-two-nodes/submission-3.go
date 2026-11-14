func closestMeetingNode(edges []int, node1 int, node2 int) int {
    n := len(edges)

    dist1 := make([]int, n)
    dist2 := make([]int, n)

    for i := 0; i < n; i++ {
        dist1[i] = -1
        dist2[i] = -1
    }

    calculate := func(start int, dist []int) {
        node := start
        d := 0

        for node != -1 && dist[node] == -1 {
            dist[node] = d
            d++
            node = edges[node]
        }
    }

    calculate(node1, dist1)
    calculate(node2, dist2)

    answer := -1
    minDistance := int(^uint(0) >> 1)

    for i := 0; i < n; i++ {
        if dist1[i] != -1 && dist2[i] != -1 {
            maxDistance := dist1[i]
            if dist2[i] > maxDistance {
                maxDistance = dist2[i]
            }

            if maxDistance < minDistance {
                minDistance = maxDistance
                answer = i
            }
        }
    }

    return answer
}