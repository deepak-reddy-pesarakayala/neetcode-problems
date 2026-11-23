class Solution {
    private static final int[] DIRS = {-1, 0, 1, 0, -1};

    public int maximumSafenessFactor(int[][] grid) {
        int n = grid.length;
        int[][] dist = new int[n][n];
        for (int[] row : dist) {
            Arrays.fill(row, -1);
        }

        Queue<int[]> queue = new ArrayDeque<>();
        int maxDist = 0;

        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (grid[r][c] == 1) {
                    dist[r][c] = 0;
                    queue.offer(new int[]{r, c});
                }
            }
        }

        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int r = cur[0];
            int c = cur[1];
            int nextDist = dist[r][c] + 1;

            for (int d = 0; d < 4; d++) {
                int nr = r + DIRS[d];
                int nc = c + DIRS[d + 1];
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] == -1) {
                    dist[nr][nc] = nextDist;
                    if (nextDist > maxDist) {
                        maxDist = nextDist;
                    }
                    queue.offer(new int[]{nr, nc});
                }
            }
        }

        int lo = 0;
        int hi = Math.min(maxDist, Math.min(dist[0][0], dist[n - 1][n - 1]));
        int ans = 0;

        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (canReach(dist, n, mid)) {
                ans = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return ans;
    }

    private boolean canReach(int[][] dist, int n, int minSafe) {
        if (dist[0][0] < minSafe || dist[n - 1][n - 1] < minSafe) {
            return false;
        }
        if (n == 1) {
            return true;
        }

        boolean[][] visited = new boolean[n][n];
        Queue<int[]> queue = new ArrayDeque<>();
        visited[0][0] = true;
        queue.offer(new int[]{0, 0});

        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int r = cur[0];
            int c = cur[1];

            for (int d = 0; d < 4; d++) {
                int nr = r + DIRS[d];
                int nc = c + DIRS[d + 1];
                if (nr >= 0 && nr < n && nc >= 0 && nc < n
                        && !visited[nr][nc] && dist[nr][nc] >= minSafe) {
                    if (nr == n - 1 && nc == n - 1) {
                        return true;
                    }
                    visited[nr][nc] = true;
                    queue.offer(new int[]{nr, nc});
                }
            }
        }

        return false;
    }
}