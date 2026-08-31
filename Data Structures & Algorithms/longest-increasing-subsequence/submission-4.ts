class Solution {
    lengthOfLIS(nums: number[]): number {
        const n = nums.length;
        const dp: number[] = new Array(n).fill(1);
        let answer = 1;
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            answer = Math.max(answer, dp[i]);
        }
        return answer;
    }
}