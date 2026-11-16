class Solution {
    fun regionsBySlashes(grid: Array<String>): Int {
        val n = grid.size
        val parent = IntArray(n * n * 4) { it }
        var regions = n * n * 4

        fun find(x: Int): Int {
            if (parent[x] != x) {
                parent[x] = find(parent[x])
            }
            return parent[x]
        }

        fun union(a: Int, b: Int) {
            val rootA = find(a)
            val rootB = find(b)

            if (rootA != rootB) {
                parent[rootA] = rootB
                regions--
            }
        }

        for (r in 0 until n) {
            for (c in 0 until n) {
                val cell = (r * n + c) * 4

                val top = cell
                val right = cell + 1
                val bottom = cell + 2
                val left = cell + 3

                when (grid[r][c]) {
                    ' ' -> {
                        union(top, right)
                        union(right, bottom)
                        union(bottom, left)
                    }
                    '/' -> {
                        union(top, left)
                        union(right, bottom)
                    }
                    '\\' -> {
                        union(top, right)
                        union(bottom, left)
                    }
                }

                if (r > 0) {
                    union(top, (r - 1) * n * 4 + c * 4 + 2)
                }

                if (c > 0) {
                    union(left, cell - 3)
                }
            }
        }

        return regions
    }
}
