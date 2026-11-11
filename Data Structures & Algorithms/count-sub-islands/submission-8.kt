class Solution {
    fun countSubIslands(grid1: Array<IntArray>, grid2: Array<IntArray>): Int {
        val m = grid2.size
        val n = grid2[0].size
        val dr = intArrayOf(1, -1, 0, 0)
        val dc = intArrayOf(0, 0, 1, -1)
        var count = 0

        val stack = java.util.ArrayDeque<Int>()

        for (i in 0 until m) {
            for (j in 0 until n) {
                if (grid2[i][j] == 1) {
                    var valid = true
                    stack.push(i * n + j)
                    grid2[i][j] = 0

                    while (stack.isNotEmpty()) {
                        val cell = stack.pop()
                        val r = cell / n
                        val c = cell % n

                        if (grid1[r][c] == 0) {
                            valid = false
                        }

                        for (d in 0 until 4) {
                            val nr = r + dr[d]
                            val nc = c + dc[d]

                            if (nr in 0 until m && nc in 0 until n && grid2[nr][nc] == 1) {
                                grid2[nr][nc] = 0
                                stack.push(nr * n + nc)
                            }
                        }
                    }

                    if (valid) count++
                }
            }
        }

        return count
    }
}