func minOperations(boxes string) []int {
	n := len(boxes)
	answer := make([]int, n)
    balls := 0
	moves := 0
    for i := 0; i < n; i++ {
		answer[i] += moves
		balls += int(boxes[i] - '0')
		moves += balls
	}
    balls = 0
	moves = 0
    for i := n - 1; i >= 0; i-- {
		answer[i] += moves
		balls += int(boxes[i] - '0')
		moves += balls
	}
    return answer
}
