class Solution {
    fun cherryPickup(grid: Array<IntArray>): Int {
        val n = grid.size
        val neg = -1000000
        var dp = Array(n) { IntArray(n) { neg } }
        dp[0][0] = grid[0][0]
        for (step in 1 until 2 * n - 1) {
            val next = Array(n) { IntArray(n) { neg } }
            for (r1 in 0 until n) {
                val c1 = step - r1
                if (c1 !in 0 until n) continue
                for (r2 in 0 until n) {
                    val c2 = step - r2
                    if (c2 !in 0 until n) continue
                    if (grid[r1][c1] == -1 || grid[r2][c2] == -1) continue
                    var best = dp[r1][r2]
                    if (r1 > 0) best = maxOf(best, dp[r1 - 1][r2])
                    if (r2 > 0) best = maxOf(best, dp[r1][r2 - 1])
                    if (r1 > 0 && r2 > 0) best = maxOf(best, dp[r1 - 1][r2 - 1])
                    if (best == neg) continue
                    var cherries = grid[r1][c1]
                    if (r1 != r2) cherries += grid[r2][c2]
                    next[r1][r2] = best + cherries
                }
            }
            dp = next
        }
        return maxOf(0, dp[n - 1][n - 1])
    }
}