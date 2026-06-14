class Solution {
   int n;
    int[][] directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
    public int shortestBridge(int[][] grid) {
        n = grid.length;
        Queue<int[]> queue = new LinkedList<>();
        boolean found = false;
        for (int i = 0; i < n; i++) {
            if (found) break;

            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    dfs(grid, i, j, queue);
                    found = true;
                    break;
                }
            }
        }
        int steps = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] cell = queue.poll();
                for (int[] dir : directions) {
                    int r = cell[0] + dir[0];
                    int c = cell[1] + dir[1];
                    if (r < 0 || c < 0 || r >= n || c >= n || grid[r][c] == 2) {
                        continue;
                    }
                    if (grid[r][c] == 1) {
                        return steps;
                    }
                    grid[r][c] = 2;
                    queue.offer(new int[]{r, c});
                }
            }
            steps++;
        }
        return -1;
    }
    private void dfs(int[][] grid, int r, int c, Queue<int[]> queue) {
        if (r < 0 || c < 0 || r >= n || c >= n || grid[r][c] != 1) {
            return;
        }
        grid[r][c] = 2;
        queue.offer(new int[]{r, c});
        for (int[] dir : directions) {
            dfs(grid, r + dir[0], c + dir[1], queue);
        }
    }
}