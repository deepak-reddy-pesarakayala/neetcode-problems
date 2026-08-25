class Solution {
    fun minInterval(intervals: Array<IntArray>, queries: IntArray): IntArray {
        intervals.sortBy { it[0] }
        val sortedQueries = queries.withIndex().sortedBy { it.value }
        val answer = IntArray(queries.size)
        val heap = java.util.PriorityQueue<IntArray> { a, b ->
            if (a[0] != b[0]) a[0] - b[0] else a[1] - b[1]
        }
        var i = 0
        for (query in sortedQueries) {
            val q = query.value
            while (i < intervals.size && intervals[i][0] <= q) {
                val start = intervals[i][0]
                val end = intervals[i][1]
                heap.offer(intArrayOf(end - start + 1, end))
                i++
            }
            while (heap.isNotEmpty() && heap.peek()[1] < q) {
                heap.poll()
            }
            answer[query.index] = if (heap.isEmpty()) -1 else heap.peek()[0]
        }
        return answer
    }
}