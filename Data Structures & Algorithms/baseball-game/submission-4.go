func calPoints(operations []string) int {
	stack := []int{}

	for _, op := range operations {
		if op == "C" {
			stack = stack[:len(stack)-1]
		} else if op == "D" {
			stack = append(stack, 2*stack[len(stack)-1])
		} else if op == "+" {
			n := len(stack)
			stack = append(stack, stack[n-1]+stack[n-2])
		} else {
			score, _ := strconv.Atoi(op)
			stack = append(stack, score)
		}
	}

	sum := 0
	for _, score := range stack {
		sum += score
	}

	return sum
}
