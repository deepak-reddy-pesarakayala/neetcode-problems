class Solution {
    fun jump(nums: IntArray): Int {
        var jumps = 0
        var end = 0
        var farthest = 0
        for (i in 0 until nums.size - 1) {
            farthest = maxOf(farthest, i + nums[i])
            if (i == end) {
                jumps++
                end = farthest
            }
        }
        return jumps
    }
}