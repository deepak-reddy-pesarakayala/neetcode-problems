class Solution {
    private val memo = HashMap<Int, Int>()
    fun minDays(n: Int): Int {
        if (n <= 1) return n
        if (memo.containsKey(n)) return memo[n]!!
        val byTwo = n % 2 + minDays(n / 2)
        val byThree = n % 3 + minDays(n / 3)
        val result = 1 + minOf(byTwo, byThree)
        memo[n] = result
        return result
    }
}