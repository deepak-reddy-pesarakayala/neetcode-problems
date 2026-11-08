class Solution {
    constrainedSubsetSum(nums: number[], k: number): number {
        const n = nums.length;
        const dp = new Array(n).fill(0);
        const deque: number[] = [];

        let head = 0;
        let result = -Infinity;

        for (let i = 0; i < n; i++) {
            while (head < deque.length && deque[head] < i - k) {
                head++;
            }

            const maxPrev = head < deque.length ? Math.max(0, dp[deque[head]]) : 0;

            dp[i] = nums[i] + maxPrev;
            result = Math.max(result, dp[i]);

            while (deque.length > head && dp[deque[deque.length - 1]] <= dp[i]) {
                deque.pop();
            }

            deque.push(i);
        }

        return result;
    }
}