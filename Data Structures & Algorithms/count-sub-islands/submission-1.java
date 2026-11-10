class Solution {
    public int countSubIslands(int[][] grid1, int[][] grid2) {
        int m = grid2.length, n = grid2[0].length, count = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid2[i][j] == 1) {
                    if (dfs(grid1, grid2, i, j)) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
    private boolean dfs(int[][] grid1, int[][] grid2, int i, int j) {
        int m = grid2.length, n = grid2[0].length;
        boolean isSub = true;
        java.util.Deque<int[]> stack = new java.util.ArrayDeque<>();
        stack.push(new int[]{i, j});
        grid2[i][j] = 0;

        while (!stack.isEmpty()) {
            int[] curr = stack.pop();
            int r = curr[0], c = curr[1];
            if (grid1[r][c] == 0) {
                isSub = false;
            }
            int[] dr = {-1, 1, 0, 0};
            int[] dc = {0, 0, -1, 1};
            for (int k = 0; k < 4; k++) {
                int nr = r + dr[k], nc = c + dc[k];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid2[nr][nc] == 1) {
                    grid2[nr][nc] = 0;
                    stack.push(new int[]{nr, nc});
                }
            }
        }
        return isSub;
    }
}