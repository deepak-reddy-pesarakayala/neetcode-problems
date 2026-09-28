func rearrangeArray(nums []int) []int {
	result := make([]int, len(nums))

	pos := 0
	neg := 1

	for _, num := range nums {
		if num > 0 {
			result[pos] = num
			pos += 2
		} else {
			result[neg] = num
			neg += 2
		}
	}

	return result
}
