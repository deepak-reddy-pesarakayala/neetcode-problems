func longestPalindrome(s string) string {
	if len(s) <= 1 {
		return s
	}
    start := 0
	maxLength := 1
    expand := func(left, right int) {
		for left >= 0 && right < len(s) && s[left] == s[right] {
			length := right - left + 1
            if length > maxLength {
				maxLength = length
				start = left
			}
            left--
			right++
		}
	}
    for i := 0; i < len(s); i++ {
		expand(i, i)
		expand(i, i+1)
	}
    return s[start : start+maxLength]
}