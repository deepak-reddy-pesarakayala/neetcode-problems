class Solution {
    numSquares(n) {
        const dp = new Array(n + 1).fill(Infinity);
        dp[0] = 0;
        const squares = [];
        for (let i = 1; i * i <= n; i++) {
            squares.push(i * i);
        }
        for (let i = 1; i <= n; i++) {
            for (const sq of squares) {
                if (sq > i) break;
                dp[i] = Math.min(dp[i], dp[i - sq] + 1);
            }
        }
        return dp[n];
    }
}