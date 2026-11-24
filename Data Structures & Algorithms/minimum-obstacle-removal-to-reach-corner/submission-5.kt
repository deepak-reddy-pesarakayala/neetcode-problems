class Solution {
    fun minimumObstacles(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size

        val dist = Array(m) { IntArray(n) { Int.MAX_VALUE } }
        val deque = ArrayDeque<IntArray>()

        dist[0][0] = 0
        deque.addFirst(intArrayOf(0, 0))

        val dirs = intArrayOf(0, 1, 0, -1, 0)

        while (deque.isNotEmpty()) {
            val cell = deque.removeFirst()
            val r = cell[0]
            val c = cell[1]

            for (d in 0 until 4) {
                val nr = r + dirs[d]
                val nc = c + dirs[d + 1]

                if (nr in 0 until m && nc in 0 until n) {
                    val cost = dist[r][c] + grid[nr][nc]

                    if (cost < dist[nr][nc]) {
                        dist[nr][nc] = cost

                        if (grid[nr][nc] == 0) {
                            deque.addFirst(intArrayOf(nr, nc))
                        } else {
                            deque.addLast(intArrayOf(nr, nc))
                        }
                    }
                }
            }
        }

        return dist[m - 1][n - 1]
    }
}