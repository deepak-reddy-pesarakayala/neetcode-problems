func decodeString(s string) string {
	numStack := []int{}
	strStack := []string{}
	current := ""
	num := ""
    for i := 0; i < len(s); i++ {
		ch := s[i]

		if ch >= '0' && ch <= '9' {
			num += string(ch)
		} else if ch == '[' {
			n, _ := strconv.Atoi(num)
			numStack = append(numStack, n)
			strStack = append(strStack, current)
			num = ""
			current = ""
		} else if ch == ']' {
			n := numStack[len(numStack)-1]
			numStack = numStack[:len(numStack)-1]

			previous := strStack[len(strStack)-1]
			strStack = strStack[:len(strStack)-1]

			temp := ""
			for j := 0; j < n; j++ {
				temp += current
			}

			current = previous + temp
		} else {
			current += string(ch)
		}
	}

	return current
}
