func wordPattern(pattern string, s string) bool {
	words := strings.Split(s, " ")

	if len(pattern) != len(words) {
		return false
	}

	patternToWord := make(map[byte]string)
	wordToPattern := make(map[string]byte)

	for i := 0; i < len(pattern); i++ {
		ch := pattern[i]
		word := words[i]

		if mapped, exists := patternToWord[ch]; exists {
			if mapped != word {
				return false
			}
		}

		if mapped, exists := wordToPattern[word]; exists {
			if mapped != ch {
				return false
			}
		}

		patternToWord[ch] = word
		wordToPattern[word] = ch
	}

	return true
}