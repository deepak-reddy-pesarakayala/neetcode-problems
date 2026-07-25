class Solution {
    /**
     * @param {number[]} piles
     * @return {boolean}
     */
    stoneGame(piles) {
        const n = piles.length;
        const dp = piles.slice();
        for (let len = 2; len <= n; len++) {
            for (let i = 0; i <= n - len; i++) {
                const j = i + len - 1;
                dp[i] = Math.max(
                    piles[i] - dp[i + 1],
                    piles[j] - dp[i]
                );
            }
        }
        return dp[0] > 0;
    }
}