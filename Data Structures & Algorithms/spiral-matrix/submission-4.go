func spiralOrder(matrix [][]int) []int {
	result := []int{}

	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return result
	}

	top := 0
	bottom := len(matrix) - 1
	left := 0
	right := len(matrix[0]) - 1

	for top <= bottom && left <= right {

		for j := left; j <= right; j++ {
			result = append(result, matrix[top][j])
		}
		top++

		for i := top; i <= bottom; i++ {
			result = append(result, matrix[i][right])
		}
		right--

		if top <= bottom {
			for j := right; j >= left; j-- {
				result = append(result, matrix[bottom][j])
			}
			bottom--
		}

		if left <= right {
			for i := bottom; i >= top; i-- {
				result = append(result, matrix[i][left])
			}
			left++
		}
	}

	return result
}
