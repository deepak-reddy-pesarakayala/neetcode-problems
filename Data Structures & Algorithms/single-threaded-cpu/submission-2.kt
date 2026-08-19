class Solution {
    fun getOrder(tasks: Array<IntArray>): IntArray {
        val n = tasks.size
        val indices = Array(n) { it }
        indices.sortWith(compareBy { tasks[it][0] })
        val pq = PriorityQueue<Int> { a, b ->
            if (tasks[a][1] != tasks[b][1]) {
                tasks[a][1].compareTo(tasks[b][1])
            } else {
                a.compareTo(b)
            }
        }
        val result = IntArray(n)
        var resultIndex = 0
        var taskIndex = 0
        var time = 0L
        while (resultIndex < n) {
            if (pq.isEmpty() && taskIndex < n && time < tasks[indices[taskIndex]][0].toLong()) {   
                time = tasks[indices[taskIndex]][0].toLong()
            }
            while (taskIndex < n && tasks[indices[taskIndex]][0].toLong() <= time) {
                pq.offer(indices[taskIndex])
                taskIndex++
            }
            val current = pq.poll()
            result[resultIndex++] = current
            time += tasks[current][1].toLong()
        }
        return result
    }
}