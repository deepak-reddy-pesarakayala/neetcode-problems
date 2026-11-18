class Solution {
    fun calcEquation(
        equations: List<List<String>>,
        values: DoubleArray,
        queries: List<List<String>>
    ): DoubleArray {
        val graph = HashMap<String, MutableList<Pair<String, Double>>>()
        for (i in equations.indices) {
            val a = equations[i][0]
            val b = equations[i][1]
            val value = values[i]
            graph.computeIfAbsent(a) { mutableListOf() }.add(Pair(b, value))
            graph.computeIfAbsent(b) { mutableListOf() }.add(Pair(a, 1.0 / value))
        }
        fun dfs(
            current: String,
            target: String,
            product: Double,
            visited: MutableSet<String>
        ): Double {
            if (current == target) {
                return product
            }
            visited.add(current)
            for ((next, weight) in graph[current] ?: emptyList()) {
                if (!visited.contains(next)) {
                    val result = dfs(
                        next,
                        target,
                        product * weight,
                        visited
                    )
                    if (result != -1.0) {
                        return result
                    }
                }
            }
            return -1.0
        }
        val answer = DoubleArray(queries.size)
        for (i in queries.indices) {
            val start = queries[i][0]
            val end = queries[i][1]
            if (!graph.containsKey(start) || !graph.containsKey(end)) {
                answer[i] = -1.0
            } else {
                answer[i] = dfs(
                    start,
                    end,
                    1.0,
                    HashSet()
                )
            }
        }
        return answer
    }
}