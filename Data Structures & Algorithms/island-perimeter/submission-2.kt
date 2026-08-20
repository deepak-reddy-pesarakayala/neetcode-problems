class Solution {
    fun islandPerimeter(grid: Array<IntArray>): Int {
        var perimeter = 0
        val rows = grid.size
        val cols = grid[0].size
        val directions = arrayOf(
            intArrayOf(-1, 0),
            intArrayOf(1, 0),
            intArrayOf(0, -1),
            intArrayOf(0, 1)
        )
        for (i in 0 until rows) {
            for (j in 0 until cols) {
                if (grid[i][j] == 1) {
                    for (d in directions) {
                        val ni = i + d[0]
                        val nj = j + d[1]
                        if (ni < 0 || ni >= rows || nj < 0 || nj >= cols || grid[ni][nj] == 0) {
                            perimeter++
                        }
                    }
                }
            }
        }
        return perimeter
    }
}