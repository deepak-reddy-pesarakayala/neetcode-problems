func constructDistancedSequence(n int) []int {
	size := 2*n - 1
	result := make([]int, size)
	used := make([]bool, n+1)

	var backtrack func(int) bool
	backtrack = func(index int) bool {
		if index == size {
			return true
		}

		if result[index] != 0 {
			return backtrack(index + 1)
		}

		for num := n; num >= 1; num-- {
			if used[num] {
				continue
			}

			if num == 1 {
				result[index] = 1
				used[num] = true

				if backtrack(index + 1) {
					return true
				}

				result[index] = 0
				used[num] = false
			} else {
				next := index + num

				if next < size && result[next] == 0 {
					result[index] = num
					result[next] = num
					used[num] = true

					if backtrack(index + 1) {
						return true
					}

					result[index] = 0
					result[next] = 0
					used[num] = false
				}
			}
		}

		return false
	}

	backtrack(0)
	return result
}