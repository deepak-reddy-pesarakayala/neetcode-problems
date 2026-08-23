class Solution {
    fun isInterleave(s1: String, s2: String, s3: String): Boolean {
        val m = s1.length
        val n = s2.length
        if (m + n != s3.length) return false
        val dp = Array(m + 1) { BooleanArray(n + 1) }
        dp[0][0] = true
        for (i in 0..m) {
            for (j in 0..n) {
                if (i == 0 && j == 0) continue
                if (i > 0 && dp[i - 1][j] && s1[i - 1] == s3[i + j - 1]) {
                    dp[i][j] = true
                }
                if (j > 0 && dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]) {
                    dp[i][j] = true
                }
            }
        }
        return dp[m][n]
    }
}
