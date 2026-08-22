class Solution {
    fun minimumTotal(triangle: List<List<Int>>): Int {
        val dp = triangle.last().toMutableList()
        for (i in triangle.size - 2 downTo 0) {
            for (j in triangle[i].indices) {
                dp[j] = triangle[i][j] + minOf(dp[j], dp[j + 1])
            }
        }
        return dp[0]
    }
}
