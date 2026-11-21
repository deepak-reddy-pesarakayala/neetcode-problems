class Solution {
    fun largestPathValue(colors: String, edges: Array<IntArray>): Int {
        val n = colors.length
        val graph = Array(n) { mutableListOf<Int>() }
        val indegree = IntArray(n)

        for (edge in edges) {
            graph[edge[0]].add(edge[1])
            indegree[edge[1]]++
        }

        val dp = Array(n) { IntArray(26) }
        val queue = ArrayDeque<Int>()

        for (i in 0 until n) {
            if (indegree[i] == 0) {
                queue.add(i)
                dp[i][colors[i] - 'a'] = 1
            }
        }

        var visited = 0
        var answer = 0

        while (queue.isNotEmpty()) {
            val node = queue.removeFirst()
            visited++

            for (i in 0 until 26) {
                answer = maxOf(answer, dp[node][i])
            }

            for (next in graph[node]) {
                for (i in 0 until 26) {
                    val count = dp[node][i] + if (colors[next] - 'a' == i) 1 else 0
                    dp[next][i] = maxOf(dp[next][i], count)
                }

                indegree[next]--

                if (indegree[next] == 0) {
                    queue.add(next)
                }
            }
        }

        return if (visited == n) answer else -1
    }
}