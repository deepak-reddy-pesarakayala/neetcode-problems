class Solution {
    fun findMinHeightTrees(n: Int, edges: Array<IntArray>): List<Int> {
        if (n == 1) return listOf(0)
        val graph = Array(n) { mutableListOf<Int>() }
        val degree = IntArray(n)
        for (edge in edges) {
            val u = edge[0]
            val v = edge[1]
            graph[u].add(v)
            graph[v].add(u)
            degree[u]++
            degree[v]++
        }
        val queue: java.util.ArrayDeque<Int> = java.util.ArrayDeque()
        for (i in 0 until n) {
            if (degree[i] == 1) {
                queue.add(i)
            }
        }
        var remaining = n
        while (remaining > 2) {
            val size = queue.size
            remaining -= size
            repeat(size) {
                val leaf = queue.removeFirst()
                for (neighbor in graph[leaf]) {
                    degree[neighbor]--
                    if (degree[neighbor] == 1) {
                        queue.add(neighbor)
                    }
                }
            }
        }
        return queue.toList()
    }
}