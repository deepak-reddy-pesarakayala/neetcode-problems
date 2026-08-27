class Solution {
    fun largestSubmatrix(matrix: Array<IntArray>): Int {
        val m = matrix.size
        val n = matrix[0].size
        var result = 0
        for (i in 0 until m) {
            for (j in 0 until n) {
                if (matrix[i][j] == 1 && i > 0) {
                    matrix[i][j] += matrix[i - 1][j]
                }
            }
            val heights = matrix[i].clone()
            heights.sort()
            for (j in 0 until n) {
                val height = heights[j]
                val width = n - j
                result = maxOf(result, height * width)
            }
        }
        return result
    }
}