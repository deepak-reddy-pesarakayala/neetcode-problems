func maxDifference(s string) int {
	freq := make([]int, 26)

	for i := 0; i < len(s); i++ {
		freq[s[i]-'a']++
	}

	maxOdd := 0
	minEven := len(s)

	for _, count := range freq {
		if count == 0 {
			continue
		}

		if count%2 == 1 {
			if count > maxOdd {
				maxOdd = count
			}
		} else {
			if count < minEven {
				minEven = count
			}
		}
	}

	return maxOdd - minEven
}