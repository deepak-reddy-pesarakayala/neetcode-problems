class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        const totalSum = stones.reduce((acc, curr) => acc + curr, 0);
        const target = Math.floor(totalSum / 2);
        const dp = new Array(target + 1).fill(false);
        dp[0] = true; 
        for (const stone of stones) {
            for (let w = target; w >= stone; w--) {
                dp[w] = dp[w] || dp[w - stone];
            }
        }
        for (let w = target; w >= 0; w--) {
            if (dp[w]) {
                const sumS1 = w;
                const sumS2 = totalSum - sumS1;
                return sumS2 - sumS1;
            }
        }
        return 0;
    }
}