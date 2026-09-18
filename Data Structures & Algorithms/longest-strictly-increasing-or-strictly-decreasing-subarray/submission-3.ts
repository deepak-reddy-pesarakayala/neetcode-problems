class Solution {
    longestMonotonicSubarray(nums: number[]): number {
        let inc = 1;
        let dec = 1;
        let result = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                inc++;
                dec = 1;
            } else if (nums[i] < nums[i - 1]) {
                dec++;
                inc = 1;
            } else {
                inc = 1;
                dec = 1;
            }
            result = Math.max(result, inc, dec);
        }
        return result;
    }
}