func totalFruit(fruits []int) int {
	count := make(map[int]int)
	left := 0
	answer := 0

	for right := 0; right < len(fruits); right++ {
		count[fruits[right]]++

		for len(count) > 2 {
			count[fruits[left]]--

			if count[fruits[left]] == 0 {
				delete(count, fruits[left])
			}

			left++
		}

		length := right - left + 1
		if length > answer {
			answer = length
		}
	}

	return answer
}