class Solution {
    minExtraChar(s, dictionary) {
        const words = new Set(dictionary);
        const n = s.length;
        const dp = new Array(n + 1).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            dp[i] = 1 + dp[i + 1];
            for (let j = i; j < n; j++) {
                const substring = s.slice(i, j + 1);
                if (words.has(substring)) {
                    dp[i] = Math.min(dp[i], dp[j + 1]);
                }
            }
        }
        return dp[0];
    }
}