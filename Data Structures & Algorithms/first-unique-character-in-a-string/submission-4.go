func firstUniqChar(s string) int {
	freq := make([]int, 26)

	for i := 0; i < len(s); i++ {
		freq[int(s[i]-'a')]++
	}

	for i := 0; i < len(s); i++ {
		if freq[int(s[i]-'a')] == 1 {
			return i
		}
	}

	return -1
}
