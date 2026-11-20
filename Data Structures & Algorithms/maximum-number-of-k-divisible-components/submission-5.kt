class Solution {
    fun maxKDivisibleComponents(
        n: Int,
        edges: Array<IntArray>,
        values: IntArray,
        k: Int
    ): Int {
        val graph = Array(n) { mutableListOf<Int>() }

        for (edge in edges) {
            graph[edge[0]].add(edge[1])
            graph[edge[1]].add(edge[0])
        }

        val parent = IntArray(n) { -1 }
        val order = ArrayList<Int>()
        val stack = ArrayDeque<Int>()

        stack.add(0)
        parent[0] = 0

        while (stack.isNotEmpty()) {
            val node = stack.removeLast()
            order.add(node)

            for (next in graph[node]) {
                if (parent[next] == -1) {
                    parent[next] = node
                    stack.add(next)
                }
            }
        }

        val sum = LongArray(n) { values[it].toLong() }
        var result = 0

        for (i in order.size - 1 downTo 0) {
            val node = order[i]

            if (sum[node] % k.toLong() == 0L) {
                result++
            }

            if (node != 0) {
                sum[parent[node]] += sum[node]
            }
        }

        return result
    }
}
