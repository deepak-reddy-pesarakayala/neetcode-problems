func removeDuplicates(s string, k int) string {
	stack := [][2]interface{}{}

	for i := 0; i < len(s); i++ {
		ch := s[i]

		if len(stack) > 0 && stack[len(stack)-1][0] == ch {
			stack[len(stack)-1][1] = stack[len(stack)-1][1].(int) + 1

			if stack[len(stack)-1][1].(int) == k {
				stack = stack[:len(stack)-1]
			}
		} else {
			stack = append(stack, [2]interface{}{ch, 1})
		}
	}

	result := make([]byte, 0, len(s))

	for _, item := range stack {
		ch := item[0].(byte)
		count := item[1].(int)

		for i := 0; i < count; i++ {
			result = append(result, ch)
		}
	}

	return string(result)
}
