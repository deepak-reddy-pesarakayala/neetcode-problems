class Solution {
    pivotIndex(nums: number[]): number {
        let total = 0;
        for (const num of nums) {
            total += num;
        }
        let leftSum = 0;
        for (let i = 0; i < nums.length; i++) {
            const rightSum = total - leftSum - nums[i];
            if (leftSum === rightSum) return i;
            leftSum += nums[i];
        }
        return -1;
    }
}