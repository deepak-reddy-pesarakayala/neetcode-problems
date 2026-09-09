func isValidSudoku(board [][]byte) bool {
	rows := make([]map[byte]bool, 9)
	cols := make([]map[byte]bool, 9)
	boxes := make([]map[byte]bool, 9)

	for i := 0; i < 9; i++ {
		rows[i] = make(map[byte]bool)
		cols[i] = make(map[byte]bool)
		boxes[i] = make(map[byte]bool)
	}

	for r := 0; r < 9; r++ {
		for c := 0; c < 9; c++ {
			value := board[r][c]

			if value == '.' {
				continue
			}

			if rows[r][value] {
				return false
			}

			if cols[c][value] {
				return false
			}

			boxIndex := (r/3)*3 + c/3

			if boxes[boxIndex][value] {
				return false
			}

			rows[r][value] = true
			cols[c][value] = true
			boxes[boxIndex][value] = true
		}
	}

	return true
}