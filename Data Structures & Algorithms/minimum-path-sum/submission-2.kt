class Solution {
    fun minPathSum(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size
        val dp = IntArray(n)
        dp[0] = grid[0][0]
        for (j in 1 until n) {
            dp[j] = dp[j - 1] + grid[0][j]
        }
        for (i in 1 until m) {
            dp[0] += grid[i][0]
            for (j in 1 until n) {
                dp[j] = minOf(dp[j], dp[j - 1]) + grid[i][j]
            }
        }
        return dp[n - 1]
    }
}