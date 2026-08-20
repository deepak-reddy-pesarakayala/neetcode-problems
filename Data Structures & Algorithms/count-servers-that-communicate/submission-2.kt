class Solution {
    fun countServers(grid: Array<IntArray>): Int {
        val rows = grid.size
        val cols = grid[0].size
        val rowCount = IntArray(rows)
        val colCount = IntArray(cols)
        for (i in 0 until rows) {
            for (j in 0 until cols) {
                if (grid[i][j] == 1) {
                    rowCount[i]++
                    colCount[j]++
                }
            }
        }
        var result = 0
        for (i in 0 until rows) {
            for (j in 0 until cols) {
                if (grid[i][j] == 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
                    result++
                }
            }
        }
        return result
    }
}