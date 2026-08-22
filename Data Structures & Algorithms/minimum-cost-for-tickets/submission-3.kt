class Solution {
    fun mincostTickets(days: IntArray, costs: IntArray): Int {
        val dp = IntArray(366)
        val travel = BooleanArray(366)
        for (day in days) {
            travel[day] = true
        }
        for (day in 1..365) {
            if (!travel[day]) {
                dp[day] = dp[day - 1]
            } else {
                dp[day] = minOf(
                    dp[day - 1] + costs[0],
                    dp[maxOf(0, day - 7)] + costs[1],
                    dp[maxOf(0, day - 30)] + costs[2]
                )
            }
        }
        return dp[days.last()]
    }
}