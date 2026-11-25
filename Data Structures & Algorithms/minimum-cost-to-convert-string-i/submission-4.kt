class Solution {
    fun minimumCost(
        source: String,
        target: String,
        original: CharArray,
        changed: CharArray,
        cost: IntArray
    ): Long {
        val dist = Array(26) { LongArray(26) { Long.MAX_VALUE / 2 } }

        for (i in 0 until 26) {
            dist[i][i] = 0L
        }

        for (i in original.indices) {
            val u = original[i] - 'a'
            val v = changed[i] - 'a'
            dist[u][v] = minOf(dist[u][v], cost[i].toLong())
        }

        for (k in 0 until 26) {
            for (i in 0 until 26) {
                for (j in 0 until 26) {
                    dist[i][j] = minOf(
                        dist[i][j],
                        dist[i][k] + dist[k][j]
                    )
                }
            }
        }

        var answer = 0L

        for (i in source.indices) {
            val u = source[i] - 'a'
            val v = target[i] - 'a'

            if (dist[u][v] == Long.MAX_VALUE / 2) {
                return -1L
            }

            answer += dist[u][v]
        }

        return answer
    }
}