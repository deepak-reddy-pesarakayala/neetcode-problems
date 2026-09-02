func lengthOfLongestSubstring(s string) int {
	lastSeen := make(map[byte]int)
    left := 0
	maxLength := 0 
	for right := 0; right < len(s); right++ {
		ch := s[right]
		if index, exists := lastSeen[ch]; exists && index >= left {
			left = index + 1
		}
        lastSeen[ch] = right
        length := right - left + 1
        if length > maxLength {
			maxLength = length
		}
	}
    return maxLength
}
