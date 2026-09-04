func exist(board [][]byte, word string) bool {
	rows := len(board)
	cols := len(board[0])
    var dfs func(int, int, int) bool
	dfs = func(row, col, index int) bool {
		if index == len(word) {
			return true
		}
        if row < 0 || row >= rows || col < 0 || col >= cols {
			return false
		}
        if board[row][col] != word[index] {
			return false
		}
        temp := board[row][col]
		board[row][col] = '#'
        found := dfs(row+1, col, index+1) ||
			dfs(row-1, col, index+1) ||
			dfs(row, col+1, index+1) ||
			dfs(row, col-1, index+1)

		board[row][col] = temp
        return found
	}
    for row := 0; row < rows; row++ {
		for col := 0; col < cols; col++ {
			if dfs(row, col, 0) {
				return true
			}
		}
	}
    return false
}
