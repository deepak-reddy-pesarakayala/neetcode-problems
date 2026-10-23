class Solution {
    minExtraChar(s: string, dictionary: string[]): number {
        const n = s.length;
        const words = new Set(dictionary);
        const dp = new Array(n + 1).fill(0);

        for (let i = n - 1; i >= 0; i--) {
            dp[i] = dp[i + 1] + 1;

            for (let j = i + 1; j <= n; j++) {
                if (words.has(s.substring(i, j))) {
                    dp[i] = Math.min(dp[i], dp[j]);
                }
            }
        }

        return dp[0];
    }
}