func foreignDictionary(words []string) string {
	adj := make(map[byte]map[byte]bool)
	inDegree := make(map[byte]int)

	for _, word := range words {
		for i := 0; i < len(word); i++ {
			if _, exists := adj[word[i]]; !exists {
				adj[word[i]] = make(map[byte]bool)
				inDegree[word[i]] = 0
			}
		}
	}

	for i := 0; i < len(words)-1; i++ {
		word1 := words[i]
		word2 := words[i+1]

		minLen := len(word1)
		if len(word2) < minLen {
			minLen = len(word2)
		}

		found := false

		for j := 0; j < minLen; j++ {
			if word1[j] != word2[j] {
				if !adj[word1[j]][word2[j]] {
					adj[word1[j]][word2[j]] = true
					inDegree[word2[j]]++
				}
				found = true
				break
			}
		}

		if !found && len(word1) > len(word2) {
			return ""
		}
	}

	queue := []byte{}

	for ch, degree := range inDegree {
		if degree == 0 {
			queue = append(queue, ch)
		}
	}

	result := []byte{}

	for len(queue) > 0 {
		ch := queue[0]
		queue = queue[1:]

		result = append(result, ch)

		for next := range adj[ch] {
			inDegree[next]--

			if inDegree[next] == 0 {
				queue = append(queue, next)
			}
		}
	}

	if len(result) != len(inDegree) {
		return ""
	}

	return string(result)
}