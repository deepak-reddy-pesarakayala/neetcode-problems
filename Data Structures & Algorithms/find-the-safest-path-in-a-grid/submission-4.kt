class Solution {
    fun maximumSafenessFactor(grid: Array<IntArray>): Int {
        val n = grid.size
        val dist = Array(n) { IntArray(n) { -1 } }
        val queue = ArrayDeque<IntArray>()

        for (r in 0 until n) {
            for (c in 0 until n) {
                if (grid[r][c] == 1) {
                    dist[r][c] = 0
                    queue.add(intArrayOf(r, c))
                }
            }
        }

        val dirs = intArrayOf(0, 1, 0, -1, 0)

        while (queue.isNotEmpty()) {
            val cell = queue.removeFirst()
            val r = cell[0]
            val c = cell[1]

            for (d in 0 until 4) {
                val nr = r + dirs[d]
                val nc = c + dirs[d + 1]

                if (nr in 0 until n && nc in 0 until n && dist[nr][nc] == -1) {
                    dist[nr][nc] = dist[r][c] + 1
                    queue.add(intArrayOf(nr, nc))
                }
            }
        }

        fun canReach(limit: Int): Boolean {
            if (dist[0][0] < limit) return false

            val visited = Array(n) { BooleanArray(n) }
            val q = ArrayDeque<IntArray>()

            q.add(intArrayOf(0, 0))
            visited[0][0] = true

            while (q.isNotEmpty()) {
                val cell = q.removeFirst()
                val r = cell[0]
                val c = cell[1]

                if (r == n - 1 && c == n - 1) return true

                for (d in 0 until 4) {
                    val nr = r + dirs[d]
                    val nc = c + dirs[d + 1]

                    if (nr in 0 until n && nc in 0 until n &&
                        !visited[nr][nc] && dist[nr][nc] >= limit
                    ) {
                        visited[nr][nc] = true
                        q.add(intArrayOf(nr, nc))
                    }
                }
            }

            return false
        }

        var low = 0
        var high = 2 * n
        var answer = 0

        while (low <= high) {
            val mid = low + (high - low) / 2

            if (canReach(mid)) {
                answer = mid
                low = mid + 1
            } else {
                high = mid - 1
            }
        }

        return answer
    }
}