class Solution {
    fun countCompleteComponents(n: Int, edges: Array<IntArray>): Int {
        val graph = Array(n) { mutableListOf<Int>() }

        for (edge in edges) {
            val u = edge[0]
            val v = edge[1]
            graph[u].add(v)
            graph[v].add(u)
        }

        val visited = BooleanArray(n)
        var result = 0

        for (i in 0 until n) {
            if (visited[i]) continue

            val stack = ArrayDeque<Int>()
            stack.add(i)
            visited[i] = true

            var vertices = 0
            var degreeSum = 0

            while (stack.isNotEmpty()) {
                val node = stack.removeLast()
                vertices++
                degreeSum += graph[node].size

                for (neighbor in graph[node]) {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true
                        stack.add(neighbor)
                    }
                }
            }

            val componentEdges = degreeSum / 2

            if (componentEdges == vertices * (vertices - 1) / 2) {
                result++
            }
        }

        return result
    }
}
