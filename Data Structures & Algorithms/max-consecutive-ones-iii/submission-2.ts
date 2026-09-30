class Solution {
    longestOnes(nums: number[], k: number): number {
        let left = 0;
        let zeros = 0;
        let result = 0;
        for (let right = 0; right < nums.length; right++) {
            if (nums[right] === 0) zeros++;
            while (zeros > k) {
                if (nums[left] === 0) zeros--;
                left++;
            }
            result = Math.max(result, right - left + 1);
        }
        return result;
    }
}