func canSeePersonsCount(heights []int) []int {
	n := len(heights)
	answer := make([]int, n)
	stack := []int{}

	for i := n - 1; i >= 0; i-- {
		for len(stack) > 0 && heights[i] > stack[len(stack)-1] {
			stack = stack[:len(stack)-1]
			answer[i]++
		}

		if len(stack) > 0 {
			answer[i]++
		}

		stack = append(stack, heights[i])
	}

	return answer
}
