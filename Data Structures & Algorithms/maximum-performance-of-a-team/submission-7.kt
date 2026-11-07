class Solution {
    fun maxPerformance(n: Int, speed: IntArray, efficiency: IntArray, k: Int): Int {
        val engineers = (0 until n).sortedByDescending { efficiency[it] }
        val pq = PriorityQueue<Int>()
        var sum = 0L
        var maxPerformance = 0L
        val mod = 1000000007L

        for (i in engineers) {
            pq.offer(speed[i])
            sum += speed[i]

            if (pq.size > k) {
                sum -= pq.poll()
            }

            val performance = sum * efficiency[i]
            maxPerformance = maxOf(maxPerformance, performance)
        }

        return (maxPerformance % mod).toInt()
    }
}