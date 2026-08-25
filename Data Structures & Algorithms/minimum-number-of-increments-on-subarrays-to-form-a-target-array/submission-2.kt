class Solution {
    fun minNumberOperations(target: IntArray): Int {
        var result = target[0]
        for (i in 1 until target.size) {
            if (target[i] > target[i - 1]) {
                result += target[i] - target[i - 1]
            }
        }
        return result
    }
}
