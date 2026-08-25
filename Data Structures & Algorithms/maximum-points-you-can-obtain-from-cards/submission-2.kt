class Solution {
    fun maxScore(cardPoints: IntArray, k: Int): Int {
        val n = cardPoints.size
        val total = cardPoints.sum()
        if (k == n) return total
        var window = 0
        for (i in 0 until n - k) {
            window += cardPoints[i]
        }
        var minSum = window
        for (i in n - k until n) {
            window += cardPoints[i]
            window -= cardPoints[i - (n - k)]
            minSum = minOf(minSum, window)
        }
        return total - minSum
    }
}