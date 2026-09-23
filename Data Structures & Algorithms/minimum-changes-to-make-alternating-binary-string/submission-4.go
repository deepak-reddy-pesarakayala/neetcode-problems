func minOperations(s string) int {
	change01 := 0
	change10 := 0

	for i := 0; i < len(s); i++ {
		expected01 := byte('0' + i%2)
		expected10 := byte('1' - i%2)

		if s[i] != expected01 {
			change01++
		}

		if s[i] != expected10 {
			change10++
		}
	}

	if change01 < change10 {
		return change01
	}

	return change10
}
