class Solution {
    fun countPaths(n: Int, roads: Array<IntArray>): Int {
        val mod = 1_000_000_007L

        val graph = Array(n) { mutableListOf<Pair<Int, Long>>() }

        for (road in roads) {
            val u = road[0]
            val v = road[1]
            val w = road[2].toLong()

            graph[u].add(Pair(v, w))
            graph[v].add(Pair(u, w))
        }

        val dist = LongArray(n) { Long.MAX_VALUE }
        val ways = LongArray(n)

        val pq = PriorityQueue<Pair<Long, Int>>(compareBy { it.first })

        dist[0] = 0L
        ways[0] = 1L
        pq.add(Pair(0L, 0))

        while (pq.isNotEmpty()) {
            val (time, node) = pq.poll()

            if (time > dist[node]) continue

            for ((next, weight) in graph[node]) {
                val newTime = time + weight

                if (newTime < dist[next]) {
                    dist[next] = newTime
                    ways[next] = ways[node]
                    pq.add(Pair(newTime, next))
                } else if (newTime == dist[next]) {
                    ways[next] = (ways[next] + ways[node]) % mod
                }
            }
        }

        return ways[n - 1].toInt()
    }
}