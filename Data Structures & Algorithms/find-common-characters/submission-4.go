func commonChars(words []string) []string {
	minFreq := make([]int, 26)

	for i := 0; i < len(words[0]); i++ {
		minFreq[int(words[0][i]-'a')]++
	}

	for i := 1; i < len(words); i++ {
		freq := make([]int, 26)

		for j := 0; j < len(words[i]); j++ {
			freq[int(words[i][j]-'a')]++
		}

		for j := 0; j < 26; j++ {
			if freq[j] < minFreq[j] {
				minFreq[j] = freq[j]
			}
		}
	}

	result := []string{}

	for i := 0; i < 26; i++ {
		for j := 0; j < minFreq[i]; j++ {
			result = append(result, string(byte('a'+i)))
		}
	}

	return result
}
