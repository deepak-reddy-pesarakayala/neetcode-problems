class Solution {
    fun maxSumDistinctTriplet(x: IntArray, y: IntArray): Int {
        val best = HashMap<Int, Int>()
        for (i in x.indices) {
            best[x[i]] = maxOf(best.getOrDefault(x[i], 0), y[i])
        }
        if (best.size < 3) return -1
        val top = best.values.sortedDescending()
        return top[0] + top[1] + top[2]
    }
}