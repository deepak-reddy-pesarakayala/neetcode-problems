class Solution {
    fun convert(s: String, numRows: Int): String {
        if (numRows == 1 || numRows >= s.length) return s
        val rows = Array(numRows) { StringBuilder() }
        var row = 0
        var direction = 1
        for (ch in s) {
            rows[row].append(ch)
            if (row == 0) {
                direction = 1
            } else if (row == numRows - 1) {
                direction = -1
            }

            row += direction
        }

        val result = StringBuilder()

        for (r in rows) {
            result.append(r)
        }

        return result.toString()
    }
}

