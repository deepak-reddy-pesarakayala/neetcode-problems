func vowelStrings(words []string, queries [][]int) []int {
	n := len(words)
	prefix := make([]int, n+1)

	isVowel := func(c byte) bool {
		return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'
	}

	for i, word := range words {
		prefix[i+1] = prefix[i]

		if isVowel(word[0]) && isVowel(word[len(word)-1]) {
			prefix[i+1]++
		}
	}

	answer := make([]int, len(queries))

	for i, query := range queries {
		left := query[0]
		right := query[1]

		answer[i] = prefix[right+1] - prefix[left]
	}

	return answer
}
