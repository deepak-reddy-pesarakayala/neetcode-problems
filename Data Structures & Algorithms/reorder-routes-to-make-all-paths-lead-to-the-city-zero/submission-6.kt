class Solution {
    fun minReorder(n: Int, connections: Array<IntArray>): Int {
        val graph = Array(n) { mutableListOf<Pair<Int, Int>>() }

        for (edge in connections) {
            val a = edge[0]
            val b = edge[1]
            graph[a].add(Pair(b, 1))
            graph[b].add(Pair(a, 0))
        }

        val visited = BooleanArray(n)
        val stack = java.util.ArrayDeque<Int>()
        stack.push(0)
        visited[0] = true

        var result = 0

        while (stack.isNotEmpty()) {
            val node = stack.pop()

            for ((next, cost) in graph[node]) {
                if (!visited[next]) {
                    visited[next] = true
                    result += cost
                    stack.push(next)
                }
            }
        }

        return result
    }
}