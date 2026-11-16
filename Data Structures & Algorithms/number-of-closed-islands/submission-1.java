class Solution {
    public int closedIsland(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        for (int i = 0; i < m; i++) {
            if (grid[i][0] == 0) bfs(grid, i, 0);
            if (grid[i][n - 1] == 0) bfs(grid, i, n - 1);
        }
        for (int j = 0; j < n; j++) {
            if (grid[0][j] == 0) bfs(grid, 0, j);
            if (grid[m - 1][j] == 0) bfs(grid, m - 1, j);
        }
        int count = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 0) {
                    count++;
                    bfs(grid, i, j);
                }
            }
        }
        return count;
    }
    private void bfs(int[][] grid, int r, int c) {
        int m = grid.length, n = grid[0].length;
        int[] q = new int[m * n];
        int head = 0, tail = 0;
        q[tail++] = r * n + c;
        grid[r][c] = 1;
        int[] dr = {-1, 1, 0, 0};
        int[] dc = {0, 0, -1, 1};
        while (head < tail) {
            int curr = q[head++];
            int cr = curr / n, cc = curr % n;
            for (int i = 0; i < 4; i++) {
                int nr = cr + dr[i], nc = cc + dc[i];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 0) {
                    grid[nr][nc] = 1;
                    q[tail++] = nr * n + nc;
                }
            }
        }
    }
}