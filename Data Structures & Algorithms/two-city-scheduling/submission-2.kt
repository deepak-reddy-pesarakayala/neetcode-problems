class Solution {
    fun twoCitySchedCost(costs: Array<IntArray>): Int {
        costs.sortBy { it[0] - it[1] }
        val n = costs.size / 2
        var total = 0
        for (i in costs.indices) {
            total += if (i < n) costs[i][0] else costs[i][1]
        }
        return total
    }
}