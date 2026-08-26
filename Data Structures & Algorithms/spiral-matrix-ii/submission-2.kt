class Solution {
    fun generateMatrix(n: Int): Array<IntArray> {
        val matrix = Array(n) { IntArray(n) }
        var top = 0
        var bottom = n - 1
        var left = 0
        var right = n - 1
        var value = 1
        while (top <= bottom && left <= right) {
            for (j in left..right) {
                matrix[top][j] = value++
            }
            top++
            for (i in top..bottom) {
                matrix[i][right] = value++
            }
            right--
            if (top <= bottom) {
                for (j in right downTo left) {
                    matrix[bottom][j] = value++
                }
                bottom--
            }
            if (left <= right) {
                for (i in bottom downTo top) {
                    matrix[i][left] = value++
                }
                left++
            }
        }
        return matrix
    }
}
