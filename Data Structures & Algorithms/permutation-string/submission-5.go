func checkInclusion(s1 string, s2 string) bool {
	if len(s1) > len(s2) {
		return false
	}

	count1 := make([]int, 26)
	count2 := make([]int, 26)

	for i := 0; i < len(s1); i++ {
		count1[s1[i]-'a']++
		count2[s2[i]-'a']++
	}

	matches := 0
	for i := 0; i < 26; i++ {
		if count1[i] == count2[i] {
			matches++
		}
	}

	left := 0

	for right := len(s1); right < len(s2); right++ {
		if matches == 26 {
			return true
		}

		index := s2[right] - 'a'
		count2[index]++

		if count2[index] == count1[index] {
			matches++
		} else if count2[index] == count1[index]+1 {
			matches--
		}

		index = s2[left] - 'a'
		count2[index]--

		if count2[index] == count1[index] {
			matches++
		} else if count2[index] == count1[index]-1 {
			matches--
		}

		left++
	}

	return matches == 26
}
