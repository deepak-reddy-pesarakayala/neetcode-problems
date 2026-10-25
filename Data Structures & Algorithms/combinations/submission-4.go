func combine(n int, k int) [][]int {
	result := [][]int{}
	current := []int{}
	var backtrack func(int)
	backtrack = func(start int) {
		if len(current) == k {
			temp := make([]int, len(current))
			copy(temp, current)
			result = append(result, temp)
			return
		}
		for i := start; i <= n-(k-len(current))+1; i++ {
			current = append(current, i)
			backtrack(i + 1)
			current = current[:len(current)-1]
		}
	}
	backtrack(1)
	return result
}