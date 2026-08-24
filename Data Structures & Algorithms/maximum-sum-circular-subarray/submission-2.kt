class Solution {
    fun maxSubarraySumCircular(nums: IntArray): Int {
        var total = 0
        var curMax = 0
        var maxSum = nums[0]
        var curMin = 0
        var minSum = nums[0]
        for (num in nums) {
            curMax = maxOf(num, curMax + num)
            maxSum = maxOf(maxSum, curMax)
            curMin = minOf(num, curMin + num)
            minSum = minOf(minSum, curMin)
            total += num
        }
        if (maxSum < 0) return maxSum
        return maxOf(maxSum, total - minSum)
    }
}