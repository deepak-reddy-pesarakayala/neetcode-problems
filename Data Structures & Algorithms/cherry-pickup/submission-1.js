class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    cherryPickup(grid) {
        const n = grid.length;
        const dp = Array.from({ length: n }, () =>
            Array.from({ length: n }, () => Array(n).fill(-Infinity))
        );
        const solve = (r1, c1, r2) => {
            const c2 = r1 + c1 - r2;
            if (r1 >= n || c1 >= n || r2 >= n || c2 >= n || 
                grid[r1][c1] === -1 || grid[r2][c2] === -1) {
                return -Infinity;
            }
            if (r1 === n - 1 && c1 === n - 1) {
                return grid[r1][c1];
            }
            if (dp[r1][c1][r2] !== -Infinity) {
                return dp[r1][c1][r2];
            }
            let cherries = 0;
            if (r1 === r2 && c1 === c2) {
                cherries += grid[r1][c1]; 
            } else {
                cherries += grid[r1][c1] + grid[r2][c2]; 
            }
            const maxNext = Math.max(
                solve(r1 + 1, c1, r2 + 1),
                solve(r1 + 1, c1, r2),
                solve(r1, c1 + 1, r2 + 1),
                solve(r1, c1 + 1, r2)
            );
            cherries += maxNext;
            dp[r1][c1][r2] = cherries;
            return cherries;
        };
        const result = solve(0, 0, 0);
        return Math.max(0, result);
    }
}