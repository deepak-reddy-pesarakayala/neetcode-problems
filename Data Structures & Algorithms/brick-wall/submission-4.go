func leastBricks(wall [][]int) int {
	edges := make(map[int]int)
	maxEdges := 0
    for _, row := range wall {
		position := 0
        for i := 0; i < len(row)-1; i++ {
			position += row[i]
			edges[position]++
            if edges[position] > maxEdges {
				maxEdges = edges[position]
			}
		}
	}
    return len(wall) - maxEdges
}

