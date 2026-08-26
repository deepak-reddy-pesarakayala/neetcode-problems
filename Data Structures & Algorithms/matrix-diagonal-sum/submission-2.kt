class Solution {
    fun diagonalSum(mat: Array<IntArray>): Int {
        val n = mat.size
        var sum = 0
        for (i in 0 until n) {
            sum += mat[i][i]
            if (i != n - 1 - i) {
                sum += mat[i][n - 1 - i]
            }
        }
        return sum
    }
}