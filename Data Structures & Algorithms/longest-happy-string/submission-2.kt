class Solution {
    fun longestDiverseString(a: Int, b: Int, c: Int): String {
       val pq = PriorityQueue<IntArray> { x, y ->
            y[0] - x[0]
        }
        if (a > 0) pq.offer(intArrayOf(a, 0))
        if (b > 0) pq.offer(intArrayOf(b, 1))
        if (c > 0) pq.offer(intArrayOf(c, 2))
        val result = StringBuilder()
        while (pq.isNotEmpty()) {
            val first = pq.poll()
            if (result.length >= 2 &&
                result[result.length - 1] == ('a'.code + first[1]).toChar() &&
                result[result.length - 2] == ('a'.code + first[1]).toChar()
            ) {
                if (pq.isEmpty()) {
                    break
                }
                val second = pq.poll()
                val ch = ('a'.code + second[1]).toChar()
                result.append(ch)
                second[0]--
                if (second[0] > 0) {
                    pq.offer(second)
                }
                pq.offer(first)
            } else {
                val ch = ('a'.code + first[1]).toChar()
                result.append(ch)
                first[0]--
                if (first[0] > 0) {
                    pq.offer(first)
                }
            }
        }
        return result.toString()
    }
}
