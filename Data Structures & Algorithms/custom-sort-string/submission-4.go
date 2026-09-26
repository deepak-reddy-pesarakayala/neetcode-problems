func customSortString(order string, s string) string {
	freq := make([]int, 26)

	for i := 0; i < len(s); i++ {
		freq[s[i]-'a']++
	}

	result := ""

	for i := 0; i < len(order); i++ {
		index := order[i] - 'a'

		for freq[index] > 0 {
			result += string(order[i])
			freq[index]--
		}
	}

	for i := 0; i < 26; i++ {
		for freq[i] > 0 {
			result += string(byte('a' + i))
			freq[i]--
		}
	}

	return result
}