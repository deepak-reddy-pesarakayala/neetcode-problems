class Solution {
    fun maxPoints(grid: Array<IntArray>, queries: IntArray): IntArray {
        val m = grid.size
        val n = grid[0].size

        val result = IntArray(queries.size)
        val sortedQueries = queries.indices.sortedBy { queries[it] }

        val pq = java.util.PriorityQueue<IntArray>(
            compareBy { it[0] }
        )

        val visited = Array(m) { BooleanArray(n) }

        pq.add(intArrayOf(grid[0][0], 0, 0))
        visited[0][0] = true

        val dr = intArrayOf(1, -1, 0, 0)
        val dc = intArrayOf(0, 0, 1, -1)

        var count = 0

        for (index in sortedQueries) {
            val query = queries[index]

            while (pq.isNotEmpty() && pq.peek()[0] < query) {
                val cell = pq.poll()

                val r = cell[1]
                val c = cell[2]

                count++

                for (d in 0 until 4) {
                    val nr = r + dr[d]
                    val nc = c + dc[d]

                    if (nr in 0 until m && nc in 0 until n && !visited[nr][nc]) {
                        visited[nr][nc] = true
                        pq.add(intArrayOf(grid[nr][nc], nr, nc))
                    }
                }
            }

            result[index] = count
        }

        return result
    }
}
