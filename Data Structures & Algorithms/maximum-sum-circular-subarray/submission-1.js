class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let totalSum = 0;
        let currentMax = 0;
        let maxSum = nums[0];
        let currentMin = 0;
        let minSum = nums[0];
        for (const num of nums) {
            totalSum += num;
            currentMax = Math.max(num, currentMax + num);
            maxSum = Math.max(maxSum, currentMax);
            currentMin = Math.min(num, currentMin + num);
            minSum = Math.min(minSum, currentMin);
        }
        if (maxSum < 0) {
            return maxSum;
        }
        return Math.max(maxSum, totalSum - minSum);
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Solution;
}