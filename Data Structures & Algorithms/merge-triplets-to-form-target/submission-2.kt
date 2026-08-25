class Solution {
    fun mergeTriplets(triplets: Array<IntArray>, target: IntArray): Boolean {
        var x = false
        var y = false
        var z = false
        for (t in triplets) {
            if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) continue
            if (t[0] == target[0]) x = true
            if (t[1] == target[1]) y = true
            if (t[2] == target[2]) z = true
        }
        return x && y && z
    }
}