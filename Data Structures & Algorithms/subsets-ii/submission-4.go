func subsetsWithDup(nums []int) [][]int {
	sort.Ints(nums)
	result := [][]int{}
	current := []int{}
	var backtrack func(int)
	backtrack = func(start int) {
		temp := make([]int, len(current))
		copy(temp, current)
		result = append(result, temp)
		for i := start; i < len(nums); i++ {
			if i > start && nums[i] == nums[i-1] {
				continue
			}
			current = append(current, nums[i])
			backtrack(i + 1)
			current = current[:len(current)-1]
		}
	}
	backtrack(0)
	return result
}