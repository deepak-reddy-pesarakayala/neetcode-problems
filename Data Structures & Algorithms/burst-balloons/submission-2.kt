class Solution {
    fun maxCoins(nums: IntArray): Int {
        val n = nums.size
        val arr = IntArray(n + 2)
        arr[0] = 1
        arr[n + 1] = 1
        for (i in nums.indices) {
            arr[i + 1] = nums[i]
        }
        val dp = Array(n + 2) { IntArray(n + 2) }
        for (len in 1..n) {
            for (l in 1..n - len + 1) {
                val r = l + len - 1
                for (i in l..r) {
                    val coins =
                        arr[l - 1] * arr[i] * arr[r + 1] +
                        dp[l][i - 1] +
                        dp[i + 1][r]

                    dp[l][r] = maxOf(dp[l][r], coins)
                }
            }
        }
        return dp[1][n]
    }
}