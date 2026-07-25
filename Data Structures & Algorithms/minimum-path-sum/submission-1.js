class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const dp = new Array(n).fill(Infinity);
        dp[0] = grid[0][0];
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j - 1] + grid[0][j];
        }
        for (let i = 1; i < m; i++) {
            dp[0] += grid[i][0];
            for (let j = 1; j < n; j++) {
                dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
            }
        }
        return dp[n - 1];
    }
}