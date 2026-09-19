func findDisappearedNumbers(nums []int) []int {
	result := []int{}

	for i := 0; i < len(nums); i++ {
		num := nums[i]
		if num < 0 {
			num = -num
		}

		index := num - 1

		if nums[index] > 0 {
			nums[index] = -nums[index]
		}
	}

	for i := 0; i < len(nums); i++ {
		if nums[i] > 0 {
			result = append(result, i+1)
		}
	}

	return result
}
