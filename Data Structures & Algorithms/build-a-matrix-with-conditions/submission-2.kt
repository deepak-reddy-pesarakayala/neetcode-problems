class Solution {
    fun buildMatrix(
        k: Int,
        rowConditions: Array<IntArray>,
        colConditions: Array<IntArray>
    ): Array<IntArray> {
        val rowOrder = topologicalSort(k, rowConditions)
        val colOrder = topologicalSort(k, colConditions)
        if (rowOrder.isEmpty() || colOrder.isEmpty()) return emptyArray()
        val rowPos = IntArray(k + 1)
        val colPos = IntArray(k + 1)
        for (i in 0 until k) {
            rowPos[rowOrder[i]] = i
            colPos[colOrder[i]] = i
        }
        val matrix = Array(k) { IntArray(k) }
        for (num in 1..k) {
            matrix[rowPos[num]][colPos[num]] = num
        }
        return matrix
    }
    private fun topologicalSort(k: Int, conditions: Array<IntArray>): IntArray {
        val graph = Array(k + 1) { mutableListOf<Int>() }
        val indegree = IntArray(k + 1)
        for (condition in conditions) {
            val from = condition[0]
            val to = condition[1]
            graph[from].add(to)
            indegree[to]++
        }
        val queue = ArrayDeque<Int>()
        for (i in 1..k) {
            if (indegree[i] == 0) queue.add(i)
        }
        val order = IntArray(k)
        var index = 0
        while (queue.isNotEmpty()) {
            val node = queue.removeFirst()
            order[index++] = node
            for (next in graph[node]) {
                indegree[next]--
                if (indegree[next] == 0) queue.add(next)
            }
        }
        return if (index == k) order else intArrayOf()
    }
}