func missingNumber(nums []int) int {
	n := len(nums)
	result := n
    for i := 0; i < n; i++ {
		result ^= i
		result ^= nums[i]
	}
    return result
}
