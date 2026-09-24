func makeEqual(words []string) bool {
	freq := make([]int, 26)

	for _, word := range words {
		for i := 0; i < len(word); i++ {
			freq[int(word[i]-'a')]++
		}
	}

	n := len(words)

	for _, count := range freq {
		if count%n != 0 {
			return false
		}
	}

	return true
}
