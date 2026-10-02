func evalRPN(tokens []string) int {
	stack := []int{}

	for _, token := range tokens {
		if token == "+" || token == "-" || token == "*" || token == "/" {
			b := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			a := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			if token == "+" {
				stack = append(stack, a+b)
			} else if token == "-" {
				stack = append(stack, a-b)
			} else if token == "*" {
				stack = append(stack, a*b)
			} else {
				stack = append(stack, a/b)
			}
		} else {
			num, _ := strconv.Atoi(token)
			stack = append(stack, num)
		}
	}

	return stack[0]
}
