class Solution {
    fun largestIsland(grid: Array<IntArray>): Int {
        val n = grid.size
        val dirs = intArrayOf(0, 1, 0, -1, 0)
        val areas = HashMap<Int, Int>()
        val stack = ArrayDeque<Int>()
        var id = 2
        var result = 0

        for (r in 0 until n) {
            for (c in 0 until n) {
                if (grid[r][c] != 1) continue

                var area = 0
                grid[r][c] = id
                stack.addLast(r * n + c)

                while (stack.isNotEmpty()) {
                    val cell = stack.removeLast()
                    val x = cell / n
                    val y = cell % n
                    area++

                    for (d in 0 until 4) {
                        val nx = x + dirs[d]
                        val ny = y + dirs[d + 1]

                        if (nx in 0 until n && ny in 0 until n &&
                            grid[nx][ny] == 1
                        ) {
                            grid[nx][ny] = id
                            stack.addLast(nx * n + ny)
                        }
                    }
                }

                areas[id] = area
                result = maxOf(result, area)
                id++
            }
        }

        for (r in 0 until n) {
            for (c in 0 until n) {
                if (grid[r][c] != 0) continue

                val seen = HashSet<Int>()
                var area = 1

                for (d in 0 until 4) {
                    val nr = r + dirs[d]
                    val nc = c + dirs[d + 1]

                    if (nr in 0 until n && nc in 0 until n) {
                        val neighborId = grid[nr][nc]

                        if (neighborId > 1 && seen.add(neighborId)) {
                            area += areas[neighborId]!!
                        }
                    }
                }

                result = maxOf(result, area)
            }
        }

        return if (result == 0) n * n else result
    }
}