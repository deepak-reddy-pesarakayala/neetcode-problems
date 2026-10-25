func subsets(nums []int) [][]int {
	result := [][]int{}
	var backtrack func(int, []int)
	backtrack = func(start int, current []int) {
		temp := make([]int, len(current))
		copy(temp, current)
		result = append(result, temp)
		for i := start; i < len(nums); i++ {
			current = append(current, nums[i])
			backtrack(i+1, current)
			current = current[:len(current)-1]
		}
	}
	backtrack(0, []int{})
	return result
}