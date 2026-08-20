class Solution {
    fun minExtraChar(s: String, dictionary: Array<String>): Int {
        val n = s.length
        val dict = dictionary.toHashSet()
        val dp = IntArray(n + 1) { it }
        for (i in 1..n) {
            dp[i] = dp[i - 1] + 1
            for (j in 0 until i) {
                if (s.substring(j, i) in dict) {
                    dp[i] = minOf(dp[i], dp[j])
                }
            }
        }
        return dp[n]
    }
}