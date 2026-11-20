class Solution {
    fun mostProfitablePath(
        edges: Array<IntArray>,
        bob: Int,
        amount: IntArray
    ): Int {
        val n = amount.size
        val graph = Array(n) { mutableListOf<Int>() }

        for (edge in edges) {
            graph[edge[0]].add(edge[1])
            graph[edge[1]].add(edge[0])
        }

        val parent = IntArray(n) { -1 }
        val depth = IntArray(n)
        val stack = ArrayDeque<Int>()

        stack.add(0)
        parent[0] = 0

        while (stack.isNotEmpty()) {
            val node = stack.removeLast()

            for (next in graph[node]) {
                if (parent[next] == -1) {
                    parent[next] = node
                    depth[next] = depth[node] + 1
                    stack.add(next)
                }
            }
        }

        val bobTime = IntArray(n) { Int.MAX_VALUE }
        var node = bob
        var time = 0

        while (node != 0) {
            bobTime[node] = time
            node = parent[node]
            time++
        }

        bobTime[0] = time

        var answer = Int.MIN_VALUE
        val nodes = ArrayDeque<Int>()
        val parents = ArrayDeque<Int>()
        val incomes = ArrayDeque<Int>()

        nodes.add(0)
        parents.add(-1)
        incomes.add(0)

        while (nodes.isNotEmpty()) {
            val current = nodes.removeLast()
            val prev = parents.removeLast()
            val income = incomes.removeLast()

            val aliceTime = depth[current]

            val gain = when {
                aliceTime < bobTime[current] -> amount[current]
                aliceTime == bobTime[current] -> amount[current] / 2
                else -> 0
            }

            val total = income + gain

            var isLeaf = true

            for (next in graph[current]) {
                if (next != prev) {
                    isLeaf = false
                    nodes.add(next)
                    parents.add(current)
                    incomes.add(total)
                }
            }

            if (isLeaf) {
                answer = maxOf(answer, total)
            }
        }

        return answer
    }
}
