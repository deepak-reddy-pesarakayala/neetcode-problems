class Solution {
    fun buyChoco(prices: IntArray, money: Int): Int {
        var first = Int.MAX_VALUE
        var second = Int.MAX_VALUE
        for (price in prices) {
            if (price < first) {
                second = first
                first = price
            } else if (price < second) {
                second = price
            }
        }
        val cost = first + second
        return if (cost <= money) money - cost else money
    }
}
