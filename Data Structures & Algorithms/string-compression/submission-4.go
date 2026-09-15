func compress(chars []byte) int {
	write := 0
	read := 0

	for read < len(chars) {
		current := chars[read]
		count := 0

		for read < len(chars) && chars[read] == current {
			read++
			count++
		}

		chars[write] = current
		write++

		if count > 1 {
			digits := []byte{}
			for count > 0 {
				digits = append(digits, byte('0'+count%10))
				count /= 10
			}

			for i := len(digits) - 1; i >= 0; i-- {
				chars[write] = digits[i]
				write++
			}
		}
	}

	return write
}
