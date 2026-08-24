class Solution {
    fun splitArraySameAverage(nums: IntArray): Boolean {
        val n = nums.size
        val sum = nums.sum()
        val dp = Array(n + 1) { mutableSetOf<Int>() }
        dp[0].add(0)
        for (num in nums) {
            for (size in n - 1 downTo 0) {
                for (s in dp[size].toList()) {
                    dp[size + 1].add(s + num)
                }
            }
        }
        for (size in 1 until n) {
            if (sum * size % n == 0) {
                val target = sum * size / n
                if (target in dp[size]) return true
            }
        }
        return false
    }
}
