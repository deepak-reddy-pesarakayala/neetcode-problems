class Solution {
    fun rotateTheBox(boxGrid: Array<CharArray>): Array<CharArray> {
        val m = boxGrid.size
        val n = boxGrid[0].size
        for (i in 0 until m) {
            var empty = n - 1
            for (j in n - 1 downTo 0) {
                when (boxGrid[i][j]) {
                    '#' -> {
                        boxGrid[i][j] = '.'
                        boxGrid[i][empty] = '#'
                        empty--
                    }
                    '*' -> {
                        empty = j - 1
                    }
                }
            }
        }
        val result = Array(n) { CharArray(m) }
        for (i in 0 until m) {
            for (j in 0 until n) {
                result[j][m - 1 - i] = boxGrid[i][j]
            }
        }
        return result
    }
}