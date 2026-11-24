class Solution {
    private static final int[] DR = {-1, 1, 0, 0};
    private static final int[] DC = {0, 0, -1, 1};

    public int minimumObstacles(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;

        int[][] dist = new int[rows][cols];
        for (int[] row : dist) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }

        Deque<int[]> deque = new ArrayDeque<>();
        dist[0][0] = 0;
        deque.offerFirst(new int[]{0, 0});

        while (!deque.isEmpty()) {
            int[] curr = deque.pollFirst();
            int r = curr[0];
            int c = curr[1];
            int d = dist[r][c];

            if (r == rows - 1 && c == cols - 1) {
                return d;
            }

            for (int dir = 0; dir < 4; dir++) {
                int nr = r + DR[dir];
                int nc = c + DC[dir];

                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
                    continue;
                }

                int nextCost = d + grid[nr][nc];
                if (nextCost < dist[nr][nc]) {
                    dist[nr][nc] = nextCost;
                    if (grid[nr][nc] == 0) {
                        deque.offerFirst(new int[]{nr, nc});
                    } else {
                        deque.offerLast(new int[]{nr, nc});
                    }
                }
            }
        }

        return dist[rows - 1][cols - 1];
    }
}