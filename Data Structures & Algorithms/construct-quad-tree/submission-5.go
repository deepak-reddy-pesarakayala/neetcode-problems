func construct(grid [][]int) *Node {
	n := len(grid)

	var build func(int, int, int) *Node
	build = func(row, col, size int) *Node {
		value := grid[row][col]
		same := true

		for i := row; i < row+size && same; i++ {
			for j := col; j < col+size; j++ {
				if grid[i][j] != value {
					same = false
					break
				}
			}
		}

		if same {
			return &Node{
				Val:    value == 1,
				IsLeaf: true,
			}
		}

		half := size / 2

		return &Node{
			Val:         true,
			IsLeaf:      false,
			TopLeft:     build(row, col, half),
			TopRight:    build(row, col+half, half),
			BottomLeft:  build(row+half, col, half),
			BottomRight: build(row+half, col+half, half),
		}
	}

	return build(0, 0, n)
}
