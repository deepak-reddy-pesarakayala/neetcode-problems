func longestMonotonicSubarray(nums []int) int {
	increasing := 1
	decreasing := 1
	answer := 1

	for i := 1; i < len(nums); i++ {
		if nums[i] > nums[i-1] {
			increasing++
		} else {
			increasing = 1
		}

		if nums[i] < nums[i-1] {
			decreasing++
		} else {
			decreasing = 1
		}

		if increasing > answer {
			answer = increasing
		}
		if decreasing > answer {
			answer = decreasing
		}
	}

	return answer
}