class Solution {
    fun shortestBridge(grid: Array<IntArray>): Int {
        val n = grid.size
        val queue = ArrayDeque<Pair<Int, Int>>()
        var found = false
        for (i in 0 until n) {
            for (j in 0 until n) {
                if (grid[i][j] == 1) {
                    markIsland(grid, i, j, queue)
                    found = true
                    break
                }
            }
            if (found) break
        }
        var distance = 0
        val dirs = intArrayOf(-1, 0, 1, 0, -1)
        while (queue.isNotEmpty()) {
            val size = queue.size
            repeat(size) {
                val (r, c) = queue.removeFirst()
                for (d in 0 until 4) {
                    val nr = r + dirs[d]
                    val nc = c + dirs[d + 1]
                    if (nr !in 0 until n || nc !in 0 until n) continue
                    if (grid[nr][nc] == 2) continue
                    if (grid[nr][nc] == 1) return distance
                    grid[nr][nc] = 2
                    queue.addLast(Pair(nr, nc))
                }
            }
            distance++
        }
        return -1
    }
    private fun markIsland(grid: Array<IntArray>, r: Int, c: Int, queue: ArrayDeque<Pair<Int, Int>>) {
        val n = grid.size
        val stack = ArrayDeque<Pair<Int, Int>>()
        stack.addLast(Pair(r, c))
        grid[r][c] = 2
        val dirs = intArrayOf(-1, 0, 1, 0, -1)
        while (stack.isNotEmpty()) {
            val (cr, cc) = stack.removeLast()
            queue.addLast(Pair(cr, cc))
            for (d in 0 until 4) {
                val nr = cr + dirs[d]
                val nc = cc + dirs[d + 1]
                if (nr in 0 until n && nc in 0 until n && grid[nr][nc] == 1) {
                    grid[nr][nc] = 2
                    stack.addLast(Pair(nr, nc))
                }
            }
        }
    }
}