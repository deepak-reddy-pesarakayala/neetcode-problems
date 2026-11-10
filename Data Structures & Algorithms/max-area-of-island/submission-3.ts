class Solution {
    maxAreaOfIsland(grid: number[][]): number {
        const m = grid.length;
        const n = grid[0].length;
        let maxArea = 0;

        const dfs = (r: number, c: number): number => {
            if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] === 0) {
                return 0;
            }

            grid[r][c] = 0;

            return 1 +
                dfs(r + 1, c) +
                dfs(r - 1, c) +
                dfs(r, c + 1) +
                dfs(r, c - 1);
        };

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    const area = dfs(i, j);
                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea;
    }
}