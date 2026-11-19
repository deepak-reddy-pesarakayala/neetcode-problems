class Solution {
    getMaximumGold(grid) {
        const m = grid.length;
        const n = grid[0].length;
        let answer = 0;

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        const dfs = (r, c) => {
            const gold = grid[r][c];
            grid[r][c] = 0;

            let maxGold = 0;

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] > 0) {
                    maxGold = Math.max(maxGold, dfs(nr, nc));
                }
            }

            grid[r][c] = gold;
            return gold + maxGold;
        };

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] > 0) {
                    answer = Math.max(answer, dfs(r, c));
                }
            }
        }

        return answer;
    }
}