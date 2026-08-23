class Solution {
    fun findTargetSumWays(nums: IntArray, target: Int): Int {
        val sum = nums.sum()
        if (kotlin.math.abs(target) > sum || (sum + target) % 2 != 0) return 0
        val subset = (sum + target) / 2
        val dp = IntArray(subset + 1)
        dp[0] = 1
        for (num in nums) {
            for (j in subset downTo num) {
                dp[j] += dp[j - num]
            }
        }
        return dp[subset]
    }
}
