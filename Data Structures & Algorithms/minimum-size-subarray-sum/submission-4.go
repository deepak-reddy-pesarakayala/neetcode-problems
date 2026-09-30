func minSubArrayLen(target int, nums []int) int {
	left := 0
	sum := 0
	answer := len(nums) + 1

	for right := 0; right < len(nums); right++ {
		sum += nums[right]

		for sum >= target {
			length := right - left + 1

			if length < answer {
				answer = length
			}

			sum -= nums[left]
			left++
		}
	}

	if answer == len(nums)+1 {
		return 0
	}

	return answer
}
