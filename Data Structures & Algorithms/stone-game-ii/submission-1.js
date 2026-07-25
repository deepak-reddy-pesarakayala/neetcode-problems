class Solution {
    /**
     * @param {number[]} piles
     * @return {number}
     */
    stoneGameII(piles) {
        const n = piles.length;
        const suffixSum = new Array(n).fill(0);
        let total = 0;
        for (let i = 0; i < n; i++) {
            total += piles[i];
        }
        let currentPrefix = 0;
        for (let i = 0; i < n; i++) {
            suffixSum[i] = total - currentPrefix;
            currentPrefix += piles[i];
        }
        const memo = Array.from({ length: n }, () => new Array(n + 1).fill(0));
        function getMaxStones(i, M) {
            if (i >= n) return 0;
            if (i + 2 * M >= n) {
                return suffixSum[i];
            }
            if (memo[i][M] > 0) {
                return memo[i][M];
            }
            let maxStones = 0;
            for (let X = 1; X <= 2 * M; X++) {
                const nextM = Math.max(M, X);
                const stonesTaken = suffixSum[i] - getMaxStones(i + X, nextM);
                maxStones = Math.max(maxStones, stonesTaken);
            }
            memo[i][M] = maxStones;
            return maxStones;
        }
        return getMaxStones(0, 1);
    }
}