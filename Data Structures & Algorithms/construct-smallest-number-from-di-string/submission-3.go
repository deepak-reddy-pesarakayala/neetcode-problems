func smallestNumber(pattern string) string {
	n := len(pattern)
	result := make([]byte, n+1)
	for i := 0; i <= n; i++ {
		result[i] = byte('1' + i)
	}
	start := 0
	for i := 0; i < n; i++ {
		if pattern[i] == 'I' {
			reverse(result, start, i)
			start = i + 1
		}
	}
	reverse(result, start, n)
	return string(result)
}

func reverse(s []byte, left, right int) {
	for left < right {
		s[left], s[right] = s[right], s[left]
		left++
		right--
	}
}