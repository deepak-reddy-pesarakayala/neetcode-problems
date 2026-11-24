import java.util.PriorityQueue

class Solution {
    fun minimumTime(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size

        if (m == 1 && n == 1) return 0
        if (grid[0][1] > 1 && grid[1][0] > 1) return -1

        val dist = Array(m) { IntArray(n) { Int.MAX_VALUE } }
        val pq = PriorityQueue<IntArray> { a, b -> a[0].compareTo(b[0]) }

        val dirs = intArrayOf(0, 1, 0, -1, 0)

        dist[0][0] = 0
        pq.add(intArrayOf(0, 0, 0))

        while (pq.isNotEmpty()) {
            val cur = pq.poll()
            val time = cur[0]
            val r = cur[1]
            val c = cur[2]

            if (time != dist[r][c]) continue

            if (r == m - 1 && c == n - 1) return time

            for (d in 0 until 4) {
                val nr = r + dirs[d]
                val nc = c + dirs[d + 1]

                if (nr !in 0 until m || nc !in 0 until n) continue

                val nextTime = time + 1

                val arrival = if (nextTime >= grid[nr][nc]) {
                    nextTime
                } else {
                    val diff = grid[nr][nc] - nextTime
                    grid[nr][nc] + (diff % 2)
                }

                if (arrival < dist[nr][nc]) {
                    dist[nr][nc] = arrival
                    pq.add(intArrayOf(arrival, nr, nc))
                }
            }
        }

        return -1
    }
}