class Solution {
    fun maxDistance(grid: Array<IntArray>): Int {
        val n = grid.size
        val queue = java.util.ArrayDeque<Int>()
        var water = 0

        for (i in 0 until n) {
            for (j in 0 until n) {
                if (grid[i][j] == 1) {
                    queue.add(i * n + j)
                } else {
                    water++
                }
            }
        }

        if (queue.isEmpty() || water == 0) return -1

        val dr = intArrayOf(-1, 1, 0, 0)
        val dc = intArrayOf(0, 0, -1, 1)
        var distance = -1

        while (queue.isNotEmpty()) {
            val size = queue.size
            distance++

            repeat(size) {
                val cell = queue.remove()
                val r = cell / n
                val c = cell % n

                for (d in 0 until 4) {
                    val nr = r + dr[d]
                    val nc = c + dc[d]

                    if (nr in 0 until n && nc in 0 until n && grid[nr][nc] == 0) {
                        grid[nr][nc] = 1
                        queue.add(nr * n + nc)
                    }
                }
            }
        }

        return distance
    }
}