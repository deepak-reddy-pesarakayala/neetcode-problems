class Solution {
    firstMissingPositive(nums: number[]): number {
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            if (nums[i] <= 0 || nums[i] > n) nums[i] = n + 1;
        }
        for (let i = 0; i < n; i++) {
            const value = Math.abs(nums[i]);
            if (value <= n) {
                nums[value - 1] = -Math.abs(nums[value - 1]);
            }
        }
        for (let i = 0; i < n; i++) {
            if (nums[i] > 0) return i + 1;
        }
        return n + 1;
    }
}