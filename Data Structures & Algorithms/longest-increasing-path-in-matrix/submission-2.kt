class Solution {
    fun longestIncreasingPath(matrix: Array<IntArray>): Int {
        val m = matrix.size
        val n = matrix[0].size
        val dp = Array(m) { IntArray(n) }
        val directions = arrayOf(
            intArrayOf(1, 0),
            intArrayOf(-1, 0),
            intArrayOf(0, 1),
            intArrayOf(0, -1)
        )
        fun dfs(r: Int, c: Int): Int {
            if (dp[r][c] != 0) return dp[r][c]
            dp[r][c] = 1
            for (d in directions) {
                val nr = r + d[0]
                val nc = c + d[1]
                if (nr in 0 until m && nc in 0 until n && matrix[nr][nc] > matrix[r][c]) {
                    dp[r][c] = maxOf(dp[r][c], 1 + dfs(nr, nc))
                }
            }
            return dp[r][c]
        }
        var answer = 0
        for (r in 0 until m) {
            for (c in 0 until n) {
                answer = maxOf(answer, dfs(r, c))
            }
        }
        return answer
    }
}