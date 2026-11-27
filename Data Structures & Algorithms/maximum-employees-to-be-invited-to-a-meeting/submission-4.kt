class Solution {
    fun maximumInvitations(favorite: IntArray): Int {
        val n = favorite.size
        val indegree = IntArray(n)
        val depth = IntArray(n)

        for (i in 0 until n) {
            indegree[favorite[i]]++
        }

        val queue = ArrayDeque<Int>()

        for (i in 0 until n) {
            if (indegree[i] == 0) {
                queue.addLast(i)
            }
        }

        while (queue.isNotEmpty()) {
            val u = queue.removeFirst()
            val v = favorite[u]

            depth[v] = maxOf(depth[v], depth[u] + 1)

            indegree[v]--

            if (indegree[v] == 0) {
                queue.addLast(v)
            }
        }

        var maxCycle = 0
        var pairSum = 0
        val visited = BooleanArray(n)

        for (i in 0 until n) {
            if (indegree[i] > 0 && !visited[i]) {
                var cycleLen = 0
                var u = i

                while (!visited[u]) {
                    visited[u] = true
                    cycleLen++
                    u = favorite[u]
                }

                if (cycleLen == 2) {
                    val a = i
                    val b = favorite[i]
                    pairSum += 2 + depth[a] + depth[b]
                } else {
                    maxCycle = maxOf(maxCycle, cycleLen)
                }
            }
        }

        return maxOf(pairSum, maxCycle)
    }
}