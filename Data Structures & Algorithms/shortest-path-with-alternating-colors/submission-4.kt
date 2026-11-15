class Solution {
    fun shortestAlternatingPaths(
        n: Int,
        redEdges: Array<IntArray>,
        blueEdges: Array<IntArray>
    ): IntArray {
        val red = Array(n) { mutableListOf<Int>() }
        val blue = Array(n) { mutableListOf<Int>() }

        for (edge in redEdges) {
            red[edge[0]].add(edge[1])
        }

        for (edge in blueEdges) {
            blue[edge[0]].add(edge[1])
        }

        val dist = Array(n) { IntArray(2) { -1 } }
        val queue = java.util.ArrayDeque<IntArray>()

        queue.add(intArrayOf(0, 0))
        queue.add(intArrayOf(0, 1))

        dist[0][0] = 0
        dist[0][1] = 0

        while (queue.isNotEmpty()) {
            val current = queue.remove()
            val node = current[0]
            val color = current[1]

            val nextColor = 1 - color
            val neighbors = if (nextColor == 0) red[node] else blue[node]

            for (next in neighbors) {
                if (dist[next][nextColor] == -1) {
                    dist[next][nextColor] = dist[node][color] + 1
                    queue.add(intArrayOf(next, nextColor))
                }
            }
        }

        val answer = IntArray(n) { -1 }

        for (i in 0 until n) {
            val redDist = dist[i][0]
            val blueDist = dist[i][1]

            answer[i] = when {
                redDist == -1 -> blueDist
                blueDist == -1 -> redDist
                else -> minOf(redDist, blueDist)
            }
        }

        return answer
    }
}