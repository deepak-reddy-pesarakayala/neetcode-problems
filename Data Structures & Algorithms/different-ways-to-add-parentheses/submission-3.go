func diffWaysToCompute(expression string) []int {
	memo := make(map[string][]int)
	return calculate(expression, memo)
}

func calculate(s string, memo map[string][]int) []int {
	if result, ok := memo[s]; ok {
		return result
	}

	result := []int{}

	for i := 0; i < len(s); i++ {
		if s[i] == '+' || s[i] == '-' || s[i] == '*' {
			left := calculate(s[:i], memo)
			right := calculate(s[i+1:], memo)

			for _, a := range left {
				for _, b := range right {
					if s[i] == '+' {
						result = append(result, a+b)
					} else if s[i] == '-' {
						result = append(result, a-b)
					} else {
						result = append(result, a*b)
					}
				}
			}
		}
	}

	if len(result) == 0 {
		num, _ := strconv.Atoi(s)
		result = append(result, num)
	}

	memo[s] = result
	return result
}