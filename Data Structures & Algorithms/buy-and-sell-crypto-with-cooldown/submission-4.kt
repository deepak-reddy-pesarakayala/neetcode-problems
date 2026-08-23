class Solution {
    fun maxProfit(prices: IntArray): Int {
        val n = prices.size
        if (n <= 1) return 0
        val hold = IntArray(n)
        val sold = IntArray(n)
        val rest = IntArray(n)
        hold[0] = -prices[0]
        sold[0] = Int.MIN_VALUE
        rest[0] = 0
        for (i in 1 until n) {
            hold[i] = maxOf(hold[i - 1], rest[i - 1] - prices[i])
            sold[i] = hold[i - 1] + prices[i]
            rest[i] = maxOf(rest[i - 1], sold[i - 1])
        }
        return maxOf(sold[n - 1], rest[n - 1])
    }
}
