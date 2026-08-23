class Solution {
    fun numDistinct(s: String, t: String): Int {
        val n = t.length
        val dp = LongArray(n + 1)
        dp[0] = 1
        for (i in s.indices) {
            for (j in n - 1 downTo 0) {
                if (s[i] == t[j]) {
                    dp[j + 1] += dp[j]
                }
            }
        }
        return dp[n].toInt()
    }
}
