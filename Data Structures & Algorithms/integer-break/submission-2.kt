class Solution {
    fun integerBreak(n: Int): Int {
        val dp = IntArray(n + 1)
        dp[1] = 1
        for (i in 2..n) {
            for (j in 1 until i) {
                dp[i] = maxOf(dp[i], maxOf(j * (i - j), j * dp[i - j]))
            }
        }
        return dp[n]
    }
}