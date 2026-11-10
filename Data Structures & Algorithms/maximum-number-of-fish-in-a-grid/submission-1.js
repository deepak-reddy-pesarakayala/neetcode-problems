class Solution {
    findMaxFish(grid) {
        const m = grid.length;
        const n = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] === 0) {
                return 0;
            }

            let fish = grid[r][c];
            grid[r][c] = 0;

            fish += dfs(r + 1, c);
            fish += dfs(r - 1, c);
            fish += dfs(r, c + 1);
            fish += dfs(r, c - 1);

            return fish;
        };

        let maxFish = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] > 0) {
                    maxFish = Math.max(maxFish, dfs(i, j));
                }
            }
        }

        return maxFish;
    }
}
