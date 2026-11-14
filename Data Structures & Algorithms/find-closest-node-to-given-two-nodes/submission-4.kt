class Solution {
    fun closestMeetingNode(edges: IntArray, node1: Int, node2: Int): Int {
        val n = edges.size

        fun getDistances(start: Int): IntArray {
            val dist = IntArray(n) { -1 }
            var node = start
            var d = 0

            while (node != -1 && dist[node] == -1) {
                dist[node] = d
                d++
                node = edges[node]
            }

            return dist
        }

        val dist1 = getDistances(node1)
        val dist2 = getDistances(node2)

        var answer = -1
        var minDistance = Int.MAX_VALUE

        for (i in 0 until n) {
            if (dist1[i] != -1 && dist2[i] != -1) {
                val maxDistance = maxOf(dist1[i], dist2[i])

                if (maxDistance < minDistance) {
                    minDistance = maxDistance
                    answer = i
                }
            }
        }

        return answer
    }
}