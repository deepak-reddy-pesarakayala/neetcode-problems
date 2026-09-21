func findLucky(arr []int) int {
	freq := make(map[int]int)

	for _, num := range arr {
		freq[num]++
	}

	answer := -1

	for num, count := range freq {
		if num == count && num > answer {
			answer = num
		}
	}

	return answer
}