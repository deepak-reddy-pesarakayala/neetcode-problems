class Solution {
    private static final int[] DR = {-1, 1, 0, 0};
    private static final int[] DC = {0, 0, -1, 1};

    public int minimumTime(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;

        long[][][] best = new long[rows][cols][2];
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                best[r][c][0] = Long.MAX_VALUE;
                best[r][c][1] = Long.MAX_VALUE;
            }
        }

        // Each entry: {time, row, col}
        java.util.PriorityQueue<long[]> pq = new java.util.PriorityQueue<>(
            (a, b) -> Long.compare(a[0], b[0])
        );

        best[0][0][0] = 0L;
        pq.offer(new long[]{0L, 0L, 0L});

        while (!pq.isEmpty()) {
            long[] curr = pq.poll();
            long t = curr[0];
            int r = (int) curr[1];
            int c = (int) curr[2];
            int parity = (int) (t & 1L);

            if (r == rows - 1 && c == cols - 1) {
                return (int) t;
            }
            if (t > best[r][c][parity]) {
                continue;
            }

            long nextTime = t + 1L;
            boolean canBounce = hasValidNeighbor(grid, r, c, nextTime);

            for (int d = 0; d < 4; d++) {
                int nr = r + DR[d];
                int nc = c + DC[d];
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
                    continue;
                }

                long req = grid[nr][nc];
                long arrival;
                if (nextTime >= req) {
                    arrival = nextTime;
                } else {
                    if (!canBounce) {
                        continue;
                    }
                    long diff = req - nextTime;
                    arrival = (diff % 2L == 0L) ? req : req + 1L;
                }

                int nParity = (int) (arrival & 1L);
                if (arrival < best[nr][nc][nParity]) {
                    best[nr][nc][nParity] = arrival;
                    pq.offer(new long[]{arrival, nr, nc});
                }
            }
        }

        return -1;
    }

    private boolean hasValidNeighbor(int[][] grid, int r, int c, long earliestNext) {
        int rows = grid.length;
        int cols = grid[0].length;
        for (int d = 0; d < 4; d++) {
            int nr = r + DR[d];
            int nc = c + DC[d];
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] <= earliestNext) {
                return true;
            }
        }
        return false;
    }
}