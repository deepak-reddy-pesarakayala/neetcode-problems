func subarraysWithKDistinct(nums []int, k int) int {
	return atMost(nums, k) - atMost(nums, k-1)
}

func atMost(nums []int, k int) int {
	if k == 0 {
		return 0
	}

	count := make(map[int]int)
	left := 0
	answer := 0

	for right := 0; right < len(nums); right++ {
		count[nums[right]]++

		for len(count) > k {
			count[nums[left]]--

			if count[nums[left]] == 0 {
				delete(count, nums[left])
			}

			left++
		}

		answer += right - left + 1
	}

	return answer
}
