class Solution {
    fun findMaximizedCapital(
        k: Int,
        w: Int,
        profits: IntArray,
        capital: IntArray
    ): Int {
        val n = profits.size
        val projects = Array(n) { i ->
            intArrayOf(capital[i], profits[i])
        }
        projects.sortBy { it[0] }
        val maxHeap = PriorityQueue<Int>(compareByDescending { it })
        var currentCapital = w.toLong()
        var index = 0
        repeat(k) {
            while (
                index < n &&
                projects[index][0].toLong() <= currentCapital
            ) {
                maxHeap.offer(projects[index][1])
                index++
            }
            if (maxHeap.isEmpty()) {
                return@repeat
            }
            currentCapital += maxHeap.poll().toLong()
        }
        return currentCapital.toInt()
    }
}