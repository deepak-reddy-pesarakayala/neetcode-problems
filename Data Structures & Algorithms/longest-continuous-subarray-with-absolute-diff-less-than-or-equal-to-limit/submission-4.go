func longestSubarray(nums []int, limit int) int {
	maxDeque := []int{}
	minDeque := []int{}
	left := 0
	answer := 0

	for right := 0; right < len(nums); right++ {
		for len(maxDeque) > 0 && nums[maxDeque[len(maxDeque)-1]] <= nums[right] {
			maxDeque = maxDeque[:len(maxDeque)-1]
		}
		maxDeque = append(maxDeque, right)

		for len(minDeque) > 0 && nums[minDeque[len(minDeque)-1]] >= nums[right] {
			minDeque = minDeque[:len(minDeque)-1]
		}
		minDeque = append(minDeque, right)

		for nums[maxDeque[0]]-nums[minDeque[0]] > limit {
			if maxDeque[0] == left {
				maxDeque = maxDeque[1:]
			}
			if minDeque[0] == left {
				minDeque = minDeque[1:]
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
