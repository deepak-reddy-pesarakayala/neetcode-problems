class Solution {
    fun stoneGameII(piles: IntArray): Int {
        val n = piles.size
        val suffix = IntArray(n + 1)
        for (i in n - 1 downTo 0) {
            suffix[i] = suffix[i + 1] + piles[i]
        }
        val dp = Array(n) { IntArray(n + 1) { -1 } }
        fun dfs(i: Int, m: Int): Int {
            if (i >= n) return 0
            if (dp[i][m] != -1) return dp[i][m]
            if (2 * m >= n - i) return suffix[i]
            var best = 0
            for (x in 1..2 * m) {
                best = maxOf(best, suffix[i] - dfs(i + x, maxOf(m, x)))
            }
            dp[i][m] = best
            return best
        }
        return dfs(0, 1)
    }
}