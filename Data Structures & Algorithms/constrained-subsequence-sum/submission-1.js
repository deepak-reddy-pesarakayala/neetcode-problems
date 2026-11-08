class Solution {
    constrainedSubsetSum(nums, k) {
        const n = nums.length;
        const dp = new Array(n);
        const deque = [];
        let head = 0;
        let ans = -Infinity;

        for (let i = 0; i < n; i++) {
            while (head < deque.length && deque[head] < i - k) {
                head++;
            }

            dp[i] = nums[i];

            if (head < deque.length) {
                dp[i] = Math.max(dp[i], nums[i] + dp[deque[head]]);
            }

            ans = Math.max(ans, dp[i]);

            while (deque.length > head && dp[deque[deque.length - 1]] <= dp[i]) {
                deque.pop();
            }

            deque.push(i);
        }

        return ans;
    }
}