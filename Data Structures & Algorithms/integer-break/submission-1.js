class Solution {
    integerBreak(n) {
        if (n === 2) return 1;
        if (n === 3) return 2;
        const dp = new Array(n + 1).fill(0);
        dp[2] = 2;
        dp[3] = 3;
        for (let i = 4; i <= n; i++) {
            for (let j = 2; j <= Math.floor(i / 2); j++) {
                dp[i] = Math.max(dp[i], dp[j] * dp[i - j]);
            }
        }
        return dp[n];
    }
}