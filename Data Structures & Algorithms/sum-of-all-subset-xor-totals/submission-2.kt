class Solution {
    fun subsetXORSum(nums: IntArray): Int {
        var combined = 0
        for (num in nums) {
            combined = combined or num
        }
        return combined * (1 shl (nums.size - 1))
    }
}