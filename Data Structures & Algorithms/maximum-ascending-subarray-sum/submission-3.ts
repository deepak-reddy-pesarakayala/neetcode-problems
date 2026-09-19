class Solution {
    maxAscendingSum(nums: number[]): number {
        let current = nums[0];
        let result = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                current += nums[i];
            } else {
                current = nums[i];
            }
            result = Math.max(result, current);
        }
        return result;
    }
}