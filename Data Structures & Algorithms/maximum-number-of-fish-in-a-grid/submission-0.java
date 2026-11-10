class Solution {
    public int findMaxFish(int[][] grid) {
        int m = grid.length, n = grid[0].length, maxFish = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] > 0) {
                    maxFish = Math.max(maxFish, dfs(grid, i, j, m, n));
                }
            }
        }
        return maxFish;
    }
    private int dfs(int[][] grid, int i, int j, int m, int n) {
        int count = grid[i][j];
        grid[i][j] = 0;
        int[] dirs = {-1, 0, 1, 0, -1};
        for (int k = 0; k < 4; k++) {
            int x = i + dirs[k], y = j + dirs[k + 1];
            if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] > 0) {
                count += dfs(grid, x, y, m, n);
            }
        }
        return count;
    }
}