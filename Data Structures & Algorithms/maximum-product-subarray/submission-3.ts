class Solution {
    maxProduct(nums: number[]): number {
        let currentMax = nums[0];
        let currentMin = nums[0];
        let result = nums[0];
        for (let i = 1; i < nums.length; i++) {
            const num = nums[i];
            const tempMax = currentMax;
            currentMax = Math.max(
                num,
                num * currentMax,
                num * currentMin
            );
            currentMin = Math.min(
                num,
                num * tempMax,
                num * currentMin
            );
            result = Math.max(result, currentMax);
        }
        return result;
    }
}