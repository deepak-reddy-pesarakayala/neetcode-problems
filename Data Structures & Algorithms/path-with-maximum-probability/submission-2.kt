class Solution {
    fun maxProbability(
        n: Int,
        edges: Array<IntArray>,
        succProb: DoubleArray,
        start: Int,
        end: Int
    ): Double {
        val graph = Array(n) { mutableListOf<Pair<Int, Double>>() }
        for (i in edges.indices) {
            val u = edges[i][0]
            val v = edges[i][1]
            val p = succProb[i]
            graph[u].add(Pair(v, p))
            graph[v].add(Pair(u, p))
        }
        val probability = DoubleArray(n)
        probability[start] = 1.0
        val pq = PriorityQueue<Pair<Int, Double>> { a, b ->
            b.second.compareTo(a.second)
        }
        pq.offer(Pair(start, 1.0))
        while (pq.isNotEmpty()) {
            val current = pq.poll()
            val node = current.first
            val prob = current.second
            if (node == end) {
                return prob
            }
            if (prob < probability[node]) continue
            for ((next, edgeProb) in graph[node]) {
                val newProb = prob * edgeProb
                if (newProb > probability[next]) {
                    probability[next] = newProb
                    pq.offer(Pair(next, newProb))
                }
            }
        }
        return 0.0
    }
}