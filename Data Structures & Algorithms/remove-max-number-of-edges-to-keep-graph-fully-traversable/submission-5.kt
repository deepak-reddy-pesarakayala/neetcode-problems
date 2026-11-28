class Solution {
    fun maxNumEdgesToRemove(n: Int, edges: Array<IntArray>): Int {
        class DSU(val n: Int) {
            val parent = IntArray(n + 1) { it }
            val rank = IntArray(n + 1)

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

                return true
            }
        }

        val alice = DSU(n)
        val bob = DSU(n)
        var used = 0
        var removable = 0

        for (edge in edges) {
            if (edge[0] == 3) {
                val a = alice.union(edge[1], edge[2])
                val b = bob.union(edge[1], edge[2])

                if (a || b) used++ else removable++
            }
        }

        for (edge in edges) {
            val type = edge[0]
            val u = edge[1]
            val v = edge[2]

            if (type == 1) {
                if (alice.union(u, v)) used++ else removable++
            } else if (type == 2) {
                if (bob.union(u, v)) used++ else removable++
            }
        }

        if (alice.rank.count { it > 0 } < 0) return -1

        val aliceConnected = (1..n).all { alice.find(it) == alice.find(1) }
        val bobConnected = (1..n).all { bob.find(it) == bob.find(1) }

        return if (aliceConnected && bobConnected) edges.size - used else -1
    }
}
