class Solution {
    fun maxPoints(points: Array<IntArray>): Long {
        val n = points[0].size
        var dp = LongArray(n) { points[0][it].toLong() }
        for (r in 1 until points.size) {
            val left = LongArray(n)
            val right = LongArray(n)
            left[0] = dp[0]
            for (c in 1 until n) {
                left[c] = maxOf(dp[c], left[c - 1] - 1)
            }
            right[n - 1] = dp[n - 1]
            for (c in n - 2 downTo 0) {
                right[c] = maxOf(dp[c], right[c + 1] - 1)
            }
            val next = LongArray(n)
            for (c in 0 until n) {
                next[c] = points[r][c].toLong() + maxOf(left[c], right[c])
            }
            dp = next
        }
        return dp.maxOrNull()!!
    }
}