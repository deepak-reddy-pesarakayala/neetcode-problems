class Solution {
    fun maximumDetonation(bombs: Array<IntArray>): Int {
        val n = bombs.size
        val graph = Array(n) { mutableListOf<Int>() }

        for (i in 0 until n) {
            for (j in 0 until n) {
                if (i == j) continue

                val dx = bombs[i][0].toLong() - bombs[j][0].toLong()
                val dy = bombs[i][1].toLong() - bombs[j][1].toLong()
                val radius = bombs[i][2].toLong()

                if (dx * dx + dy * dy <= radius * radius) {
                    graph[i].add(j)
                }
            }
        }

        fun dfs(node: Int, visited: BooleanArray): Int {
            visited[node] = true
            var count = 1

            for (neighbor in graph[node]) {
                if (!visited[neighbor]) {
                    count += dfs(neighbor, visited)
                }
            }

            return count
        }

        var answer = 0

        for (i in 0 until n) {
            val visited = BooleanArray(n)
            answer = maxOf(answer, dfs(i, visited))
        }

        return answer
    }
}
