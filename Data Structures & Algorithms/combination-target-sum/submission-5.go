func combinationSum(nums []int, target int) [][]int {
	result := [][]int{}
	current := []int{}
	var backtrack func(int, int)
	backtrack = func(index int, remaining int) {
		if remaining == 0 {
			combination := make([]int, len(current))
			copy(combination, current)
			result = append(result, combination)
			return
		}
        if remaining < 0 || index == len(nums) {
			return
		}
        current = append(current, nums[index])
		backtrack(index, remaining-nums[index])
		current = current[:len(current)-1]
		backtrack(index+1, remaining)
	}
	backtrack(0, target)
	return result
}
