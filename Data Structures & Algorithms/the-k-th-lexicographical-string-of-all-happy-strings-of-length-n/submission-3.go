func getHappyString(n int, k int) string {
	result := ""
	count := 0
	var backtrack func(string)
	backtrack = func(current string) {
		if count >= k {
			return
		}
		if len(current) == n {
			count++
			if count == k {
				result = current
			}
			return
		}
		for ch := byte('a'); ch <= 'c'; ch++ {
			if len(current) > 0 && current[len(current)-1] == ch {
				continue
			}
			backtrack(current + string(ch))
		}
	}
	backtrack("")
	return result
}