class Solution {
    fun minTime(n: Int, edges: Array<IntArray>, hasApple: List<Boolean>): Int {
        val graph = Array(n) { mutableListOf<Int>() }
        for (edge in edges) {
            graph[edge[0]].add(edge[1])
            graph[edge[1]].add(edge[0])
        }
        fun dfs(node: Int, parent: Int): Int {
            var time = 0
            for (child in graph[node]) {
                if (child == parent) continue
                val childTime = dfs(child, node)
                if (childTime > 0 || hasApple[child]) {
                    time += childTime + 2
                }
            }
            return time
        }
        return dfs(0, -1)
    }
}