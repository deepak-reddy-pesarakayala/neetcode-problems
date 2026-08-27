class Solution {
    fun findKthNumber(n: Int, k: Int): Int {
        var current = 1L
        var remaining = k - 1
        while (remaining > 0) {
            val steps = countSteps(current, n)

            if (steps <= remaining) {
                current++
                remaining -= steps
            } else {
                current *= 10
                remaining--
            }
        }

        return current.toInt()
    }

    private fun countSteps(prefix: Long, n: Int): Int {
        var first = prefix
        var last = prefix
        var count = 0L

        while (first <= n) {
            count += minOf(last, n.toLong()) - first + 1
            first *= 10
            last = last * 10 + 9
        }

        return count.toInt()
    }
}