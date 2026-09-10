func countPalindromicSubsequence(s string) int {
	first := make([]int, 26)
	last := make([]int, 26)

	for i := 0; i < 26; i++ {
		first[i] = -1
		last[i] = -1
	}

	for i := 0; i < len(s); i++ {
		index := int(s[i] - 'a')

		if first[index] == -1 {
			first[index] = i
		}

		last[index] = i
	}

	answer := 0
 
	for ch := 0; ch < 26; ch++ {
		if first[ch] == -1 || first[ch] == last[ch] {
			continue
		}

		seen := make([]bool, 26)

		for i := first[ch] + 1; i < last[ch]; i++ {
			middle := int(s[i] - 'a')

			if !seen[middle] {
				seen[middle] = true
				answer++
			}
		}
	}

	return answer
}
