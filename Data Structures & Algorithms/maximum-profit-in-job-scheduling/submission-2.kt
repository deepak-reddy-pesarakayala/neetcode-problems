class Solution {
    fun jobScheduling(startTime: IntArray, endTime: IntArray, profit: IntArray): Int {
        val n = startTime.size
        val jobs = Array(n) { i -> intArrayOf(startTime[i], endTime[i], profit[i])
         }
        Arrays.sort(jobs, Comparator { a, b -> a[1].compareTo(b[1]) })
        val dp = LongArray(n)
        dp[0] = jobs[0][2].toLong()
        for (i in 1 until n) {
            var left = 0
            var right = i - 1
            var best = -1
            while (left <= right) {
                val mid = (left + right) ushr 1
                if (jobs[mid][1] <= jobs[i][0]) {
                    best = mid
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
            val take = jobs[i][2].toLong() + if (best >= 0) dp[best] else 0L
            dp[i] = maxOf(dp[i - 1], take)
        }
        return dp[n - 1].toInt()
    }
}
