func minimumDifference(nums []int, k int) int {
	if k <= 1 {
		return 0
	}

	sort.Ints(nums)

	answer := nums[k-1] - nums[0]

	for i := k; i < len(nums); i++ {
		diff := nums[i] - nums[i-k+1]
		if diff < answer {
			answer = diff
		}
	}

	return answer
}
