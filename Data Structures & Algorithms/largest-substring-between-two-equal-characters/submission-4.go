func maxLengthBetweenEqualCharacters(s string) int {
	first := make([]int, 26)

	for i := 0; i < 26; i++ {
		first[i] = -1
	}

	answer := -1

	for i := 0; i < len(s); i++ {
		index := int(s[i] - 'a')

		if first[index] == -1 {
			first[index] = i
		} else {
			length := i - first[index] - 1

			if length > answer {
				answer = length
			}
		}
	}

	return answer
}
