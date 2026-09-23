func largestGoodInteger(num string) string {
	answer := ""

	for i := 0; i <= len(num)-3; i++ {
		if num[i] == num[i+1] && num[i] == num[i+2] {
			current := num[i : i+3]

			if answer == "" || current > answer {
				answer = current
			}
		}
	}

	return answer
}
