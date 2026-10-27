func makesquare(matchsticks []int) bool {
	sum := 0
	for _, x := range matchsticks {
		sum += x
	}
	if sum%4 != 0 {
		return false
	}
	side := sum / 4
	sort.Sort(sort.Reverse(sort.IntSlice(matchsticks)))
	if matchsticks[0] > side {
		return false
	}
	sides := make([]int, 4)
	var backtrack func(int) bool
	backtrack = func(index int) bool {
		if index == len(matchsticks) {
			return sides[0] == side && sides[1] == side && sides[2] == side
		}
		for i := 0; i < 4; i++ {
			if sides[i]+matchsticks[index] > side {
				continue
			}
			sides[i] += matchsticks[index]
			if backtrack(index + 1) {
				return true
			}
			sides[i] -= matchsticks[index]
			if sides[i] == 0 {
				break
			}
		}
		return false
	}
	return backtrack(0)
}