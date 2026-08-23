class Solution {
    fun longestPalindromeSubseq(s: String): Int {
        val n = s.length
        val dp = IntArray(n) { 1 }
        for (i in n - 2 downTo 0) {
            var prev = 0
            for (j in i + 1 until n) {
                val temp = dp[j]
                if (s[i] == s[j]) {
                    dp[j] = prev + 2
                } else {
                    dp[j] = maxOf(dp[j], dp[j - 1])
                }
                prev = temp
            }
        }
        return dp[n - 1]
    }
}