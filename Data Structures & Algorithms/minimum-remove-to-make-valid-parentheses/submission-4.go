func minRemoveToMakeValid(s string) string {
	result := []byte{}
	open := 0

	for i := 0; i < len(s); i++ {
		if s[i] == '(' {
			open++
			result = append(result, s[i])
		} else if s[i] == ')' {
			if open > 0 {
				open--
				result = append(result, s[i])
			}
		} else {
			result = append(result, s[i])
		}
	}

	if open == 0 {
		return string(result)
	}

	final := []byte{}

	for i := len(result) - 1; i >= 0; i-- {
		if result[i] == '(' && open > 0 {
			open--
			continue
		}
		final = append(final, result[i])
	}

	for i, j := 0, len(final)-1; i < j; i, j = i+1, j-1 {
		final[i], final[j] = final[j], final[i]
	}

	return string(final)
}
