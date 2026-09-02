func minWindow(s string, t string) string {
	if len(t) > len(s) {
		return ""
	}
    need := make(map[byte]int)
	window := make(map[byte]int)
	for i := 0; i < len(t); i++ {
		need[t[i]]++
	}  
	have := 0
	needCount := len(need)
    left := 0
	minLength := len(s) + 1
	minLeft := 0
    for right := 0; right < len(s); right++ {
		ch := s[right]
        if required, exists := need[ch]; exists {
			window[ch]++
			if window[ch] == required {
				have++
			}
		}
		for have == needCount {
			windowLength := right - left + 1
            if windowLength < minLength {
				minLength = windowLength
				minLeft = left
			}
            leftChar := s[left]
            if required, exists := need[leftChar]; exists {
				window[leftChar]--
				if window[leftChar] < required {
					have--
				}
			}
            left++
		}
	} 
	if minLength == len(s)+1 {
		return ""
	}
    return s[minLeft : minLeft+minLength]
}
