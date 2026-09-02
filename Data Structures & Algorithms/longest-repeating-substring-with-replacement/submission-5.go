func characterReplacement(s string, k int) int {
	count := make([]int, 26)
    left := 0
	maxFreq := 0
	maxLength := 0
    for right := 0; right < len(s); right++ {
		index := s[right] - 'A'
		count[index]++
        if count[index] > maxFreq {
			maxFreq = count[index]
		}
		windowLength := right - left + 1
        if windowLength-maxFreq > k {
			count[s[left]-'A']--
			left++
		}
        windowLength = right - left + 1
        if windowLength > maxLength {
			maxLength = windowLength
		}
	}
    return maxLength
}
