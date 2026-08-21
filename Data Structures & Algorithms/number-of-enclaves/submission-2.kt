class Solution {
    fun numEnclaves(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size
        val queue = ArrayDeque<Pair<Int, Int>>()
        for (i in 0 until m) {
            if (grid[i][0] == 1) {
                grid[i][0] = 0
                queue.addLast(Pair(i, 0))
            }
            if (grid[i][n - 1] == 1) {
                grid[i][n - 1] = 0
                queue.addLast(Pair(i, n - 1))
            }
        }
        for (j in 0 until n) {
            if (grid[0][j] == 1) {
                grid[0][j] = 0
                queue.addLast(Pair(0, j))
            }
            if (grid[m - 1][j] == 1) {
                grid[m - 1][j] = 0
                queue.addLast(Pair(m - 1, j))
            }
        }
        val dirs = arrayOf(
            intArrayOf(1, 0),
            intArrayOf(-1, 0),
            intArrayOf(0, 1),
            intArrayOf(0, -1)
        )
        while (queue.isNotEmpty()) {
            val (r, c) = queue.removeFirst()
            for (dir in dirs) {
                val nr = r + dir[0]
                val nc = c + dir[1]
                if (nr in 0 until m && nc in 0 until n && grid[nr][nc] == 1) {
                    grid[nr][nc] = 0
                    queue.addLast(Pair(nr, nc))
                }
            }
        }
        var count = 0
        for (i in 0 until m) {
            for (j in 0 until n) {
                if (grid[i][j] == 1) {
                    count++
                }
            }
        }
        return count
    }
}