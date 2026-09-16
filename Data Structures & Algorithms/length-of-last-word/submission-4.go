func lengthOfLastWord(s string) int {
	count := 0

	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == ' ' {
			if count > 0 {
				break
			}
		} else {
			count++
		}
	}

	return count
}
