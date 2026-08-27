class Solution {
    fun distributeCandies(n: Int, limit: Int): Long {
        fun ways(x: Long): Long {
            if (x < 0) return 0
            return (x + 2) * (x + 1) / 2
        }
        val N = n.toLong()
        val L = limit.toLong() + 1
        return ways(N) -
                3 * ways(N - L) +
                3 * ways(N - 2 * L) -
                ways(N - 3 * L)
    }
}