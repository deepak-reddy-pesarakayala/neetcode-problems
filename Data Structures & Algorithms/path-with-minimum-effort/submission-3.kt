class Solution {
    fun minimumEffortPath(heights: Array<IntArray>): Int {
        val rows = heights.size
        val cols = heights[0].size
        val dist = Array(rows) { IntArray(cols) { Int.MAX_VALUE } }
        val pq = PriorityQueue<IntArray> { a, b -> a[0] - b[0] }
        val dr = intArrayOf(-1, 1, 0, 0)
        val dc = intArrayOf(0, 0, -1, 1)
        dist[0][0] = 0
        pq.offer(intArrayOf(0, 0, 0))
        while (pq.isNotEmpty()) {
            val current = pq.poll()
            val effort = current[0]
            val r = current[1]
            val c = current[2]
            if (r == rows - 1 && c == cols - 1) {
                return effort
            }
            if (effort > dist[r][c]) continue
            for (i in 0..3) {
                val nr = r + dr[i]
                val nc = c + dc[i]
                if (nr in 0 until rows && nc in 0 until cols) {
                    val diff = kotlin.math.abs(heights[r][c] - heights[nr][nc])
                    val newEffort = maxOf(effort, diff)
                    if (newEffort < dist[nr][nc]) {
                        dist[nr][nc] = newEffort
                        pq.offer(intArrayOf(newEffort, nr, nc))
                    }
                }
            }
        }
        return 0
    }
}