func countServers(grid [][]int) int {
    rows := len(grid)
    cols := len(grid[0])

    rowCount := make([]int, rows)
    colCount := make([]int, cols)

    for i := 0; i < rows; i++ {
        for j := 0; j < cols; j++ {
            if grid[i][j] == 1 {
                rowCount[i]++
                colCount[j]++
            }
        }
    }

    ans := 0

    for i := 0; i < rows; i++ {
        for j := 0; j < cols; j++ {
            if grid[i][j] == 1 && (rowCount[i] > 1 || colCount[j] > 1) {
                ans++
            }
        }
    }

    return ans
}