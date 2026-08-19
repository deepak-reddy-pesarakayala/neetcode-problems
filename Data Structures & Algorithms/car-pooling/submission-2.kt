class Solution {
    fun carPooling(trips: Array<IntArray>, capacity: Int): Boolean {
        val changes = IntArray(1001)
        for (trip in trips) {
            val passengers = trip[0]
            val from = trip[1]
            val to = trip[2]
            changes[from] += passengers
            changes[to] -= passengers
        }
        var passengers = 0
        for (i in changes.indices) {
            passengers += changes[i]
            if (passengers > capacity) {
                return false
            }
        }
        return true
    }
}
