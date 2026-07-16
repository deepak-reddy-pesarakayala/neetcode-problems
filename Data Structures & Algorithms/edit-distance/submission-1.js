class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const rows = word1.length;
        const cols = word2.length;
        const dp = Array.from(
            { length: rows + 1 },
            () => new Array(cols + 1).fill(0)
        );
        for (let i = 0; i <= rows; i++) {
            dp[i][0] = i;
        }
        for (let j = 0; j <= cols; j++) {
            dp[0][j] = j;
        }
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                if (word1[i - 1] === word2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    const insert = dp[i][j - 1];
                    const remove = dp[i - 1][j];
                    const replace = dp[i - 1][j - 1];

                    dp[i][j] = 1 + Math.min(insert, remove, replace);
                }
            }
        }
        return dp[rows][cols];
    }
}