class Solution {
    fun totalNQueens(n: Int): Int {
        var count = 0
        val columns = BooleanArray(n)
        val diagonal1 = BooleanArray(2 * n - 1)
        val diagonal2 = BooleanArray(2 * n - 1)
        fun backtrack(row: Int) {
            if (row == n) {
                count++
                return
            }
            for (col in 0 until n) {
                val d1 = row - col + n - 1
                val d2 = row + col
                if (columns[col] || diagonal1[d1] || diagonal2[d2]) continue
                columns[col] = true
                diagonal1[d1] = true
                diagonal2[d2] = true
                backtrack(row + 1)
                columns[col] = false
                diagonal1[d1] = false
                diagonal2[d2] = false
            }
        }
        backtrack(0)
        return count
    }
}