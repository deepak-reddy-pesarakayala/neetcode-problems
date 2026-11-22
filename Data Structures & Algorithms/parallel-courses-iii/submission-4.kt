class Solution {
    fun minimumTime(
        n: Int,
        relations: Array<IntArray>,
        time: IntArray
    ): Int {
        val graph = Array(n + 1) { mutableListOf<Int>() }
        val indegree = IntArray(n + 1)

        for (edge in relations) {
            graph[edge[0]].add(edge[1])
            indegree[edge[1]]++
        }

        val dp = IntArray(n + 1)
        val queue = ArrayDeque<Int>()

        for (i in 1..n) {
            if (indegree[i] == 0) {
                dp[i] = time[i - 1]
                queue.add(i)
            }
        }

        var answer = 0

        while (queue.isNotEmpty()) {
            val node = queue.removeFirst()

            answer = maxOf(answer, dp[node])

            for (next in graph[node]) {
                dp[next] = maxOf(
                    dp[next],
                    dp[node] + time[next - 1]
                )

                indegree[next]--

                if (indegree[next] == 0) {
                    queue.add(next)
                }
            }
        }

        return answer
    }
}