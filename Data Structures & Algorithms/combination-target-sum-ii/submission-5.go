func combinationSum2(candidates []int, target int) [][]int {
	sort.Ints(candidates)
	result := [][]int{}
	current := []int{}
	var backtrack func(int, int)
	backtrack = func(start, sum int) {
		if sum == target {
			temp := make([]int, len(current))
			copy(temp, current)
			result = append(result, temp)
			return
		}
		for i := start; i < len(candidates); i++ {
			if i > start && candidates[i] == candidates[i-1] {
				continue
			}
			if sum+candidates[i] > target {
				break
			}
			current = append(current, candidates[i])
			backtrack(i+1, sum+candidates[i])
			current = current[:len(current)-1]
		}
	}
	backtrack(0, 0)
	return result
}