class Solution {
    fun eventualSafeNodes(graph: Array<IntArray>): List<Int> {
        val n = graph.size
        val reverse = Array(n) { mutableListOf<Int>() }
        val indegree = IntArray(n)

        for (i in 0 until n) {
            indegree[i] = graph[i].size

            for (next in graph[i]) {
                reverse[next].add(i)
            }
        }

        val queue = java.util.ArrayDeque<Int>()

        for (i in 0 until n) {
            if (indegree[i] == 0) {
                queue.add(i)
            }
        }

        val safe = BooleanArray(n)

        while (queue.isNotEmpty()) {
            val node = queue.remove()
            safe[node] = true

            for (prev in reverse[node]) {
                indegree[prev]--

                if (indegree[prev] == 0) {
                    queue.add(prev)
                }
            }
        }

        val result = mutableListOf<Int>()

        for (i in 0 until n) {
            if (safe[i]) {
                result.add(i)
            }
        }

        return result
    }
}