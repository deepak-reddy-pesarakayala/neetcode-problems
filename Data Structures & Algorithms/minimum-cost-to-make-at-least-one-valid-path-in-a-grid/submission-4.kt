class Solution {
    fun minCost(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size

        val dist = Array(m) { IntArray(n) { Int.MAX_VALUE } }
        val deque = ArrayDeque<IntArray>()

        val dr = intArrayOf(0, 0, 0, 1, -1)
        val dc = intArrayOf(0, 1, -1, 0, 0)

        dist[0][0] = 0
        deque.addFirst(intArrayOf(0, 0))

        while (deque.isNotEmpty()) {
            val cell = deque.removeFirst()
            val r = cell[0]
            val c = cell[1]

            for (d in 1..4) {
                val nr = r + dr[d]
                val nc = c + dc[d]

                if (nr in 0 until m && nc in 0 until n) {
                    val cost = if (grid[r][c] == d) 0 else 1

                    if (dist[r][c] + cost < dist[nr][nc]) {
                        dist[nr][nc] = dist[r][c] + cost

                        if (cost == 0) {
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