class Solution {
    fun findMaxFish(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size
        var answer = 0

        fun dfs(r: Int, c: Int): Int {
            if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] == 0) {
                return 0
            }

            val fish = grid[r][c]
            grid[r][c] = 0

            return fish +
                dfs(r + 1, c) +
                dfs(r - 1, c) +
                dfs(r, c + 1) +
                dfs(r, c - 1)
        }

        for (i in 0 until m) {
            for (j in 0 until n) {
                if (grid[i][j] > 0) {
                    answer = maxOf(answer, dfs(i, j))
                }
            }
        }

        return answer
    }
}