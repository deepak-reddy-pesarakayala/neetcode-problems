class Solution {
    fun pickGifts(gifts: IntArray, k: Int): Long {
        val pq = PriorityQueue<Int>(compareByDescending { it })
        for (gift in gifts) {
            pq.offer(gift)
        }
        repeat(k) {
            val max = pq.poll()
            val remaining = sqrt(max.toDouble()).toInt()
            pq.offer(remaining)
        }
        var result = 0L
        while (pq.isNotEmpty()) {
            result += pq.poll().toLong()
        }
        return result
    }
}
