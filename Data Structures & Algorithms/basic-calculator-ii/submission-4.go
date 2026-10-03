func calculate(s string) int {
	stack := []int{}
	num := 0
	op := byte('+')

	for i := 0; i <= len(s); i++ {
		var ch byte
		if i < len(s) {
			ch = s[i]
		} else {
			ch = '+'
		}

		if ch >= '0' && ch <= '9' {
			num = num*10 + int(ch-'0')
		}

		if (ch < '0' || ch > '9') && ch != ' ' {
			if op == '+' {
				stack = append(stack, num)
			} else if op == '-' {
				stack = append(stack, -num)
			} else if op == '*' {
				stack[len(stack)-1] = stack[len(stack)-1] * num
			} else if op == '/' {
				stack[len(stack)-1] = stack[len(stack)-1] / num
			}

			op = ch
			num = 0
		}
	}

	result := 0
	for _, value := range stack {
		result += value
	}

	return result
}
