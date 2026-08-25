class Solution {
    fun maxFrequency(nums: IntArray, k: Int): Int {
        val totalK = nums.count { it == k }
        var answer = totalK
        for (v in 1..50) {
            if (v == k) continue
            var current = 0
            var best = 0
            for (num in nums) {
                current += when (num) {
                    v -> 1
                    k -> -1
                    else -> 0
                }
                current = maxOf(0, current)
                best = maxOf(best, current)
            }
            answer = maxOf(answer, totalK + best)
        }
        return answer
    }
}