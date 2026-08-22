class Solution {
    fun maxEnvelopes(envelopes: Array<IntArray>): Int {
        envelopes.sortWith(compareBy<IntArray> { it[0] }.thenByDescending { it[1] })
        val dp = mutableListOf<Int>()
        for (env in envelopes) {
            val h = env[1]
            var left = 0
            var right = dp.size
            while (left < right) {
                val mid = (left + right) / 2
                if (dp[mid] < h) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            if (left == dp.size) {
                dp.add(h)
            } else {
                dp[left] = h
            }
        }
        return dp.size
    }
}