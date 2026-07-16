class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const dp = new Array(t.length + 1).fill(0);
        dp[0] = 1;
        for (const ch of s) {
            for (let j = t.length; j >= 1; j--) {
                if (ch === t[j - 1]) {
                    dp[j] += dp[j - 1];
                }
            }
        }
        return dp[t.length];
    }
}