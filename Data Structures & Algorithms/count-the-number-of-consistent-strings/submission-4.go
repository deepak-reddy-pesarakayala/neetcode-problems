func countConsistentStrings(allowed string, words []string) int {
	freq := make([]bool, 26)

	for i := 0; i < len(allowed); i++ {
		freq[int(allowed[i]-'a')] = true
	}

	answer := 0

	for _, word := range words {
		valid := true

		for i := 0; i < len(word); i++ {
			if !freq[int(word[i]-'a')] {
				valid = false
				break
			}
		}

		if valid {
			answer++
		}
	}

	return answer
}

