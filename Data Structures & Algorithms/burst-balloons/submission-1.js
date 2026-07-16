class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const balloons = [1, ...nums, 1];
        const n = balloons.length;
        const dp = Array.from(
            { length: n },
            () => new Array(n).fill(0)
        );
        for (let length = 2; length < n; length++) {
            for (let left = 0; left + length < n; left++) {
                const right = left + length;
                for (let last = left + 1; last < right; last++) {
                    const coins =
                        balloons[left] *
                        balloons[last] *
                        balloons[right] +
                        dp[left][last] +
                        dp[last][right];
                    dp[left][right] = Math.max(
                        dp[left][right],
                        coins
                    );
                }
            }
        }
        return dp[0][n - 1];
    }
}