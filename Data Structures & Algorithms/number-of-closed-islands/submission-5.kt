class Solution {
    fun closedIsland(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size
        val dr = intArrayOf(-1, 1, 0, 0)
        val dc = intArrayOf(0, 0, -1, 1)

        val stack = java.util.ArrayDeque<Int>()
        var count = 0

        for (i in 0 until m) {
            for (j in 0 until n) {
                if (grid[i][j] == 0) {
                    var closed = true

                    stack.push(i * n + j)
                    grid[i][j] = 1

                    while (stack.isNotEmpty()) {
                        val cell = stack.pop()
                        val r = cell / n
                        val c = cell % n

                        if (r == 0 || r == m - 1 || c == 0 || c == n - 1) {
                            closed = false
                        }

                        for (d in 0 until 4) {
                            val nr = r + dr[d]
                            val nc = c + dc[d]

                            if (nr in 0 until m && nc in 0 until n && grid[nr][nc] == 0) {
                                grid[nr][nc] = 1
                                stack.push(nr * n + nc)
                            }
                        }
                    }

                    if (closed) count++
                }
            }
        }

        return count
    }
}