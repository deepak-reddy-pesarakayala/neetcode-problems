class Solution {
    private static final int[][] DIRS = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    private int rows;
    private int cols;
    private int maxGold;

    public int getMaximumGold(int[][] grid) {
        this.rows = grid.length;
        this.cols = grid[0].length;
        this.maxGold = 0;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] > 0) {
                    dfs(grid, r, c, 0);
                }
            }
        }
        return maxGold;
    }

    private void dfs(int[][] grid, int r, int c, int currentGold) {
        int gold = grid[r][c];
        currentGold += gold;
        if (currentGold > maxGold) {
            maxGold = currentGold;
        }
        grid[r][c] = 0;
        for (int[] d : DIRS) {
            int nr = r + d[0];
            int nc = c + d[1];
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] > 0) {
                dfs(grid, nr, nc, currentGold);
            }
        }
        grid[r][c] = gold;
    }
}