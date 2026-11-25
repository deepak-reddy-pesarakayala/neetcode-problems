class Solution {
    fun findTheCity(n: Int, edges: Array<IntArray>, distanceThreshold: Int): Int {
        val dist = Array(n) { IntArray(n) { 1000000 } }

        for (i in 0 until n) {
            dist[i][i] = 0
        }

        for (edge in edges) {
            val u = edge[0]
            val v = edge[1]
            val w = edge[2]

            dist[u][v] = w
            dist[v][u] = w
        }

        for (k in 0 until n) {
            for (i in 0 until n) {
                for (j in 0 until n) {
                    dist[i][j] = minOf(dist[i][j], dist[i][k] + dist[k][j])
                }
            }
        }

        var result = -1
        var minCount = Int.MAX_VALUE

        for (i in 0 until n) {
            var count = 0

            for (j in 0 until n) {
                if (i != j && dist[i][j] <= distanceThreshold) {
                    count++
                }
            }

            if (count <= minCount) {
                minCount = count
                result = i
            }
        }

        return result
    }
}