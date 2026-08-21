class Solution {
    fun shortestPathBinaryMatrix(grid: Array<IntArray>): Int {
        val n = grid.size
        if (grid[0][0] == 1 || grid[n - 1][n - 1] == 1) return -1
        val queue = ArrayDeque<IntArray>()
        queue.add(intArrayOf(0, 0, 1))
        grid[0][0] = 1
        val dirs = arrayOf(
            intArrayOf(-1, -1), intArrayOf(-1, 0), intArrayOf(-1, 1),
            intArrayOf(0, -1), intArrayOf(0, 1),
            intArrayOf(1, -1), intArrayOf(1, 0), intArrayOf(1, 1)
        )
        while (queue.isNotEmpty()) {
            val cur = queue.removeFirst()
            val r = cur[0]
            val c = cur[1]
            val dist = cur[2]
            if (r == n - 1 && c == n - 1) return dist
            for (dir in dirs) {
                val nr = r + dir[0]
                val nc = c + dir[1]
                if (nr in 0 until n && nc in 0 until n && grid[nr][nc] == 0) {
                    grid[nr][nc] = 1
                    queue.add(intArrayOf(nr, nc, dist + 1))
                }
            }
        }
        return -1
    }
}