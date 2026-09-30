func longestOnes(nums []int, k int) int {
	left := 0
	zeros := 0
	answer := 0

	for right := 0; right < len(nums); right++ {
		if nums[right] == 0 {
			zeros++
		}

		for zeros > k {
			if nums[left] == 0 {
				zeros--
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
