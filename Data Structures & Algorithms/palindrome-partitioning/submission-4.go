func partition(s string) [][]string {
	result := [][]string{}
	current := []string{}
	var backtrack func(int)
	var isPalindrome func(int, int) bool
	isPalindrome = func(left, right int) bool {
		for left < right {
			if s[left] != s[right] {
				return false
			}
			left++
			right--
		}
		return true
	}
	backtrack = func(start int) {
		if start == len(s) {
			temp := make([]string, len(current))
			copy(temp, current)
			result = append(result, temp)
			return
		}
		for end := start; end < len(s); end++ {
			if isPalindrome(start, end) {
				current = append(current, s[start:end+1])
				backtrack(end + 1)
				current = current[:len(current)-1]
			}
		}
	}
	backtrack(0)
	return result
}