class Solution {
    fun putMarbles(weights: IntArray, k: Int): Long {
        val pairs = LongArray(weights.size - 1)
        for (i in pairs.indices) {
            pairs[i] = weights[i].toLong() + weights[i + 1].toLong()
        }
        pairs.sort()
        var minScore = 0L
        var maxScore = 0L
        for (i in 0 until k - 1) {
            minScore += pairs[i]
            maxScore += pairs[pairs.size - 1 - i]
        }
        return maxScore - minScore
    }
}