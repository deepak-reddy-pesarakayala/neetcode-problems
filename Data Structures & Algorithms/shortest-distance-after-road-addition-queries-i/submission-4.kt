class Solution {
    fun shortestDistanceAfterQueries(n: Int, queries: Array<IntArray>): IntArray {
        val graph = Array(n) { mutableListOf<Int>() }

        for (i in 0 until n - 1) {
            graph[i].add(i + 1)
        }

        val result = IntArray(queries.size)

        for (i in queries.indices) {
            val u = queries[i][0]
            val v = queries[i][1]

            graph[u].add(v)

            val dist = IntArray(n) { -1 }
            val queue = ArrayDeque<Int>()

            queue.add(0)
            dist[0] = 0

            while (queue.isNotEmpty()) {
                val node = queue.removeFirst()

                if (node == n - 1) break

                for (next in graph[node]) {
                    if (dist[next] == -1) {
                        dist[next] = dist[node] + 1
                        queue.add(next)
                    }
                }
            }

            result[i] = dist[n - 1]
        }

        return result
    }
}
