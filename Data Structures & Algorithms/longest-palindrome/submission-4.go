func longestPalindrome(s string) int {
	freq := make(map[byte]int)

	for i := 0; i < len(s); i++ {
		freq[s[i]]++
	}

	length := 0
	hasOdd := false

	for _, count := range freq {
		length += (count / 2) * 2

		if count%2 == 1 {
			hasOdd = true
		}
	}

	if hasOdd {
		length++
	}

	return length
}
