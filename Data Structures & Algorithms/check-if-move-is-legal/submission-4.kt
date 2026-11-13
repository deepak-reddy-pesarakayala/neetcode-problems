class Solution {
    fun checkMove(board: Array<CharArray>, rMove: Int, cMove: Int, color: Char): Boolean {
        val directions = arrayOf(
            intArrayOf(-1, -1), intArrayOf(-1, 0),
            intArrayOf(-1, 1), intArrayOf(0, -1),
            intArrayOf(0, 1), intArrayOf(1, -1),
            intArrayOf(1, 0), intArrayOf(1, 1)
        )

        val opposite = if (color == 'B') 'W' else 'B'

        for (dir in directions) {
            var r = rMove + dir[0]
            var c = cMove + dir[1]
            var count = 0

            while (r in 0 until 8 && c in 0 until 8 && board[r][c] == opposite) {
                count++
                r += dir[0]
                c += dir[1]
            }

            if (count > 0 && r in 0 until 8 && c in 0 until 8 && board[r][c] == color) {
                return true
            }
        }

        return false
    }
}