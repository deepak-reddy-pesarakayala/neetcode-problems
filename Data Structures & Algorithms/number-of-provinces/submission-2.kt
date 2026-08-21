class Solution {
    fun findCircleNum(isConnected: Array<IntArray>): Int {
        val n = isConnected.size
        val visited = BooleanArray(n)
        var provinces = 0

        fun dfs(city: Int) {
            visited[city] = true
            for (next in 0 until n) {
                if (isConnected[city][next] == 1 && !visited[next]) {
                    dfs(next)
                }
            }
        }

        for (i in 0 until n) {
            if (!visited[i]) {
                provinces++
                dfs(i)
            }
        }

        return provinces
    }
}