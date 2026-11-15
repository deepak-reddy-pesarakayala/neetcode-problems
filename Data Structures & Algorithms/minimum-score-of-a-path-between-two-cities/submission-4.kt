class Solution {
    fun minScore(n: Int, roads: Array<IntArray>): Int {
        val graph = Array(n + 1) { mutableListOf<Pair<Int, Int>>() }

        for (road in roads) {
            val a = road[0]
            val b = road[1]
            val distance = road[2]

            graph[a].add(Pair(b, distance))
            graph[b].add(Pair(a, distance))
        }

        val visited = BooleanArray(n + 1)
        val queue = java.util.ArrayDeque<Int>()

        queue.add(1)
        visited[1] = true

        var answer = Int.MAX_VALUE

        while (queue.isNotEmpty()) {
            val node = queue.remove()

            for ((next, distance) in graph[node]) {
                answer = minOf(answer, distance)

                if (!visited[next]) {
                    visited[next] = true
                    queue.add(next)
                }
            }
        }

        return answer
    }
}