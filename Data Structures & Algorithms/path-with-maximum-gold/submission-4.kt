class Solution {
    fun getMaximumGold(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size
        var answer = 0

        fun dfs(r: Int, c: Int): Int {
            if (r !in 0 until m || c !in 0 until n || grid[r][c] == 0) {
                return 0
            }

            val gold = grid[r][c]
            grid[r][c] = 0

            var best = 0

            val directions = arrayOf(
                intArrayOf(1, 0),
                intArrayOf(-1, 0),
                intArrayOf(0, 1),
                intArrayOf(0, -1)
            )

            for (dir in directions) {
                val nr = r + dir[0]
                val nc = c + dir[1]
                best = maxOf(best, dfs(nr, nc))
            }

            grid[r][c] = gold

            return gold + best
        }

        for (r in 0 until m) {
            for (c in 0 until n) {
                if (grid[r][c] > 0) {
                    answer = maxOf(answer, dfs(r, c))
                }
            }
        }

        return answer
    }
}
