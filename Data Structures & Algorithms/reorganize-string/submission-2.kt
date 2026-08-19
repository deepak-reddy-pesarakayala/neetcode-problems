class Solution {
    fun reorganizeString(s: String): String {
        val freq = IntArray(26)
        for (c in s) {
            freq[c - 'a']++
        }
        val maxFreq = freq.maxOrNull() ?: 0
        if (maxFreq > (s.length + 1) / 2) {
            return ""
        }
        val pq = PriorityQueue<Int> { a, b ->
            freq[b] - freq[a]
        }
        for (i in 0 until 26) {
            if (freq[i] > 0) {
                pq.offer(i)
            }
        }
        val result = StringBuilder()
        var previous = -1
        while (pq.isNotEmpty()) {
            var current = pq.poll()
            if (current == previous) {
                if (pq.isEmpty()) {
                    return ""
                }
                val next = pq.poll()
                pq.offer(current)
                current = next
            }
            result.append(('a'.code + current).toChar())
            freq[current]--
            previous = current
            if (freq[current] > 0) {
                pq.offer(current)
            }
        }
        return result.toString()
    }
}
