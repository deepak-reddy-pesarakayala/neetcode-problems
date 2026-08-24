class Solution {
    fun canCompleteCircuit(gas: IntArray, cost: IntArray): Int {
        var total = 0
        var tank = 0
        var start = 0
        for (i in gas.indices) {
            val diff = gas[i] - cost[i]
            total += diff
            tank += diff
            if (tank < 0) {
                start = i + 1
                tank = 0
            }
        }
        return if (total >= 0) start else -1
    }
}
