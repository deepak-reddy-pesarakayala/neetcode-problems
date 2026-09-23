func maxScore(s string) int {
	totalOnes := 0

	for i := 0; i < len(s); i++ {
		if s[i] == '1' {
			totalOnes++
		}
	}

	zeros := 0
	onesRight := totalOnes
	maxScore := 0

	for i := 0; i < len(s)-1; i++ {
		if s[i] == '0' {
			zeros++
		} else {
			onesRight--
		}

		score := zeros + onesRight

		if score > maxScore {
			maxScore = score
		}
	}

	return maxScore
}
