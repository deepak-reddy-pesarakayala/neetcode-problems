class Solution {
    fun isBipartite(graph: Array<IntArray>): Boolean {
        val n = graph.size
        val color = IntArray(n) { -1 }

        for (i in 0 until n) {
            if (color[i] != -1) continue

            val queue = ArrayDeque<Int>()
            queue.add(i)
            color[i] = 0

            while (queue.isNotEmpty()) {
                val node = queue.removeFirst()

                for (neighbor in graph[node]) {
                    if (color[neighbor] == -1) {
                        color[neighbor] = 1 - color[node]
                        queue.add(neighbor)
                    } else if (color[neighbor] == color[node]) {
                        return false
                    }
                }
            }
        }

        return true
    }
}
