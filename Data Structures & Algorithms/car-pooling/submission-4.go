func carPooling(trips [][]int, capacity int) bool {
    passengers := make([]int, 1001)

    for _, trip := range trips {
        num := trip[0]
        from := trip[1]
        to := trip[2]

        passengers[from] += num
        passengers[to] -= num
    }

    current := 0

    for _, count := range passengers {
        current += count

        if current > capacity {
            return false
        }
    }

    return true
}