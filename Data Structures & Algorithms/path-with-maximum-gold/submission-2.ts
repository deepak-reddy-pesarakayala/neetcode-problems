class Solution {
    getMaximumGold(grid: number[][]): number {
        const m = grid.length;
        const n = grid[0].length;
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let maxGold = 0;

        const dfs = (r: number, c: number): number => {
            if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] === 0) {
                return 0;
            }

            const gold = grid[r][c];
            grid[r][c] = 0;

            let best = 0;

            for (const [dr, dc] of dirs) {
                best = Math.max(best, dfs(r + dr, c + dc));
            }

            grid[r][c] = gold;

            return gold + best;
        };

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] > 0) {
                    maxGold = Math.max(maxGold, dfs(i, j));
                }
            }
        }

        return maxGold;
    }
}