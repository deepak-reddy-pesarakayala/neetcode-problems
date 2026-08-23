class Solution {
    fun lastStoneWeightII(stones: IntArray): Int {
        val sum = stones.sum()
        val target = sum / 2
        val dp = BooleanArray(target + 1)
        dp[0] = true
        for (stone in stones) {
            for (j in target downTo stone) {
                dp[j] = dp[j] || dp[j - stone]
            }
        }
        for (j in target downTo 0) {
            if (dp[j]) {
                return sum - 2 * j
            }
        }
        return 0
    }
}
