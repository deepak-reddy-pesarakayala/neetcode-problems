class Solution {
    fun minimumCost(n: Int, edges: Array<IntArray>, query: Array<IntArray>): IntArray {
        val parent = IntArray(n) { it }
        val rank = IntArray(n)
        val componentCost = IntArray(n) { -1 }

        fun find(x: Int): Int {
            if (parent[x] != x) {
                parent[x] = find(parent[x])
            }
            return parent[x]
        }

        for (edge in edges) {
            val u = edge[0]
            val v = edge[1]
            val w = edge[2]

            var pu = find(u)
            var pv = find(v)

            if (pu != pv) {
                if (rank[pu] < rank[pv]) {
                    val temp = pu
                    pu = pv
                    pv = temp
                }

                parent[pv] = pu

                if (rank[pu] == rank[pv]) {
                    rank[pu]++
                }
            }
        }

        for (edge in edges) {
            val root = find(edge[0])
            componentCost[root] = componentCost[root] and edge[2]
        }

        val answer = IntArray(query.size)

        for (i in query.indices) {
            val u = query[i][0]
            val v = query[i][1]

            val ru = find(u)
            val rv = find(v)

            answer[i] = if (ru != rv) {
                -1
            } else {
                componentCost[ru]
            }
        }

        return answer
    }
}