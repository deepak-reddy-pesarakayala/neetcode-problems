class Solution {
    fun stoneGameIII(stoneValue: IntArray): String {
        val n = stoneValue.size
        val dp = IntArray(n + 1)
        for (i in n - 1 downTo 0) {
            dp[i] = Int.MIN_VALUE
            var sum = 0
            for (j in i until minOf(i + 3, n)) {
                sum += stoneValue[j]
                dp[i] = maxOf(dp[i], sum - dp[j + 1])
            }
        }
        return when {
            dp[0] > 0 -> "Alice"
            dp[0] < 0 -> "Bob"
            else -> "Tie"
        }
    }
}
