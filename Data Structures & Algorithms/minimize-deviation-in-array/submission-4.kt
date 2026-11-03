class Solution {
    fun minimumDeviation(nums: IntArray): Int {
        val pq = PriorityQueue<Int>(Collections.reverseOrder())
        var minValue = Int.MAX_VALUE

        for (num in nums) {
            val value = if (num % 2 == 1) num * 2 else num
            pq.offer(value)
            minValue = minOf(minValue, value)
        }

        var result = Int.MAX_VALUE

        while (true) {
            val maxValue = pq.poll()
            result = minOf(result, maxValue - minValue)

            if (maxValue % 2 == 1) {
                break
            }

            val newValue = maxValue / 2
            minValue = minOf(minValue, newValue)
            pq.offer(newValue)
        }

        return result
    }
}