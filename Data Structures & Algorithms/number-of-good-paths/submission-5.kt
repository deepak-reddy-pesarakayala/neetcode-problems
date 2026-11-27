class Solution {
    fun numberOfGoodPaths(vals: IntArray, edges: Array<IntArray>): Int {
        val n = vals.size
        val parent = IntArray(n) { it }
        val rank = IntArray(n)
        val graph = Array(n) { mutableListOf<Int>() }

        for (edge in edges) {
            graph[edge[0]].add(edge[1])
            graph[edge[1]].add(edge[0])
        }

        fun find(x: Int): Int {
            if (parent[x] != x) {
                parent[x] = find(parent[x])
            }
            return parent[x]
        }

        fun union(a: Int, b: Int) {
            var ra = find(a)
            var rb = find(b)

            if (ra == rb) return

            if (rank[ra] < rank[rb]) {
                val temp = ra
                ra = rb
                rb = temp
            }

            parent[rb] = ra

            if (rank[ra] == rank[rb]) {
                rank[ra]++
            }
        }

        val order = (0 until n).sortedBy { vals[it] }
        var answer = n
        var i = 0

        while (i < n) {
            val value = vals[order[i]]
            var j = i

            while (j < n && vals[order[j]] == value) {
                val node = order[j]

                for (neighbor in graph[node]) {
                    if (vals[neighbor] <= value) {
                        union(node, neighbor)
                    }
                }

                j++
            }

            val count = HashMap<Int, Int>()

            for (k in i until j) {
                val root = find(order[k])
                count[root] = (count[root] ?: 0) + 1
            }

            for (c in count.values) {
                answer += c * (c - 1) / 2
            }

            i = j
        }

        return answer
    }
}