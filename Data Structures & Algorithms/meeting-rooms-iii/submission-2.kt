class Solution {
    fun mostBooked(n: Int, meetings: Array<IntArray>): Int {
        meetings.sortBy { it[0] }
        val available = java.util.PriorityQueue<Int>()
        val busy = java.util.PriorityQueue<LongArray> { a, b ->
            if (a[0] != b[0]) java.lang.Long.compare(a[0], b[0])
            else java.lang.Long.compare(a[1], b[1])
        }
        val count = IntArray(n)
        for (i in 0 until n) available.offer(i)
        for (meeting in meetings) {
            val start = meeting[0].toLong()
            val end = meeting[1].toLong()
            val duration = end - start
            while (busy.isNotEmpty() && busy.peek()[0] <= start) {
                available.offer(busy.poll()[1].toInt())
            }
            if (available.isNotEmpty()) {
                val room = available.poll()
                count[room]++
                busy.offer(longArrayOf(end, room.toLong()))
            } else {
                val earliest = busy.poll()
                val room = earliest[1].toInt()
                count[room]++
                busy.offer(longArrayOf(earliest[0] + duration, room.toLong()))
            }
        }
        var answer = 0
        for (i in 1 until n) {
            if (count[i] > count[answer]) {
                answer = i
            }
        }
        return answer
    }
}