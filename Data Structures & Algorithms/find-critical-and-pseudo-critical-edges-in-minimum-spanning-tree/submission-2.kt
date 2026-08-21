class DSU(private val n: Int) {
    private val parent = IntArray(n) { it }
    private val rank = IntArray(n)
    var components = n
        private set
    fun find(x: Int): Int {
        if (parent[x] != x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }
    fun union(a: Int, b: Int): Boolean {
        var x = find(a)
        var y = find(b)
        if (x == y) return false
        if (rank[x] < rank[y]) {
            val temp = x
            x = y
            y = temp
        }
        parent[y] = x
        if (rank[x] == rank[y]) {
            rank[x]++
        }
        components--
        return true
    }
}
class Solution {
    private data class Edge(
        val u: Int,
        val v: Int,
        val w: Int,
        val index: Int
    )
    private fun mstWeight(
        n: Int,
        edges: List<Edge>,
        force: Int = -1,
        skip: Int = -1
    ): Int {
        val dsu = DSU(n)
        var weight = 0
        if (force != -1) {
            val e = edges[force]
            if (dsu.union(e.u, e.v)) {
                weight += e.w
            }
        }
        for (i in edges.indices) {
            if (i == skip || i == force) continue
            val e = edges[i]
            if (dsu.union(e.u, e.v)) {
                weight += e.w
            }
        }
        return if (dsu.components == 1) weight else Int.MAX_VALUE
    }
    fun findCriticalAndPseudoCriticalEdges(
        n: Int,
        edges: Array<IntArray>
    ): List<List<Int>> {
        val sortedEdges = edges.mapIndexed { index, edge ->
            Edge(edge[0], edge[1], edge[2], index)
        }.sortedBy { it.w }
        val baseWeight = mstWeight(n, sortedEdges)
        val critical = mutableListOf<Int>()
        val pseudoCritical = mutableListOf<Int>()
        for (i in sortedEdges.indices) {
            val withoutEdge = mstWeight(n, sortedEdges, skip = i)
            if (withoutEdge > baseWeight) {
                critical.add(sortedEdges[i].index)
            } else {
                val withEdge = mstWeight(n, sortedEdges, force = i)
                if (withEdge == baseWeight) {
                    pseudoCritical.add(sortedEdges[i].index)
                }
            }
        }
        return listOf(critical, pseudoCritical)
    }
}