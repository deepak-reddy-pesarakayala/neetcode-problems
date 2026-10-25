func permute(nums []int) [][]int {
	result := [][]int{}
	var backtrack func(int)
	backtrack = func(start int) {
		if start == len(nums) {
			temp := make([]int, len(nums))
			copy(temp, nums)
			result = append(result, temp)
			return
		}
		for i := start; i < len(nums); i++ {
			nums[start], nums[i] = nums[i], nums[start]
			backtrack(start + 1)
			nums[start], nums[i] = nums[i], nums[start]
		}
	}
	backtrack(0)
	return result
}