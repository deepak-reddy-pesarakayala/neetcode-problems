class Solution {
    fun construct(grid: Array<IntArray>): Node {
        return build(grid, 0, 0, grid.size)
    }
    private fun build(
        grid: Array<IntArray>,
        row: Int,
        col: Int,
        size: Int
    ): Node {
        var same = true
        val value = grid[row][col]
        for (i in row until row + size) {
            for (j in col until col + size) {
                if (grid[i][j] != value) {
                    same = false
                    break
                }
            }
            if (!same) break
        }
        if (same) {
            return Node(value == 1, true)
        }
        val half = size / 2
        val topLeft = build(grid, row, col, half)
        val topRight = build(grid, row, col + half, half)
        val bottomLeft = build(grid, row + half, col, half)
        val bottomRight = build(grid, row + half, col + half, half)
        val node = Node(true, false)
        node.topLeft = topLeft
        node.topRight = topRight
        node.bottomLeft = bottomLeft
        node.bottomRight = bottomRight
        return node
    }
}
