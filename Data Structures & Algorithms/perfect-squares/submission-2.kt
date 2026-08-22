class Solution {
    fun numSquares(n: Int): Int {
        val dp = IntArray(n + 1) { n + 1 }
        dp[0] = 0
        for (i in 1..n) {
            var j = 1
            while (j * j <= i) {
                dp[i] = minOf(dp[i], dp[i - j * j] + 1)
                j++
            }
        }
        return dp[n]
    }
}