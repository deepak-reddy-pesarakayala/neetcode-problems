class Solution {
    largestDivisibleSubset(nums) {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        const dp = new Array(n).fill(1);
        const parent = new Array(n).fill(-1);
        let maxLen = 1;
        let maxIdx = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] % nums[j] === 0) {
                    if (dp[j] + 1 > dp[i]) {
                        dp[i] = dp[j] + 1;
                        parent[i] = j;
                    }
                }
            }
            if (dp[i] > maxLen) {
                maxLen = dp[i];
                maxIdx = i;
            }
        }
        const result = [];
        while (maxIdx !== -1) {
            result.push(nums[maxIdx]);
            maxIdx = parent[maxIdx];
        }
        return result.reverse();
    }
}