class Solution {
    fun findSmallestSetOfVertices(n: Int, edges: Array<IntArray>): List<Int> {
        val indegree = IntArray(n)

        for (edge in edges) {
            indegree[edge[1]]++
        }

        val result = mutableListOf<Int>()

        for (i in 0 until n) {
            if (indegree[i] == 0) {
                result.add(i)
            }
        }

        return result
    }
}
