class Solution {
    maxFrequency(nums: number[], k: number): number {
        nums.sort((a, b) => a - b);
        let left = 0;
        let sum = 0;
        let result = 1;
        for (let right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (nums[right] * (right - left + 1) - sum > k) {
                sum -= nums[left];
                left++;
            }
            result = Math.max(result, right - left + 1);
        }
        return result;
    }
}