class Solution {
    minSubArrayLen(target: number, nums: number[]): number {
        let left = 0;
        let sum = 0;
        let result = Infinity;
        for (let right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (sum >= target) {
                result = Math.min(result, right - left + 1);
                sum -= nums[left];
                left++;
            }
        }
        return result === Infinity ? 0 : result;
    }
}