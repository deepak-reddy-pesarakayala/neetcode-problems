class Solution {
    private static final int[] DR = {0, 0, 0, 1, -1};
    private static final int[] DC = {0, 1, -1, 0, 0};

    public int minCost(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;

        int[][] cost = new int[rows][cols];
        for (int[] row : cost) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }

        Deque<int[]> deque = new ArrayDeque<>();
        cost[0][0] = 0;
        deque.offerFirst(new int[]{0, 0});

        while (!deque.isEmpty()) {
            int[] curr = deque.pollFirst();
            int r = curr[0];
            int c = curr[1];
            int curCost = cost[r][c];

            if (r == rows - 1 && c == cols - 1) {
                return curCost;
            }

            for (int dir = 1; dir <= 4; dir++) {
                int nr = r + DR[dir];
                int nc = c + DC[dir];

                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
                    continue;
                }

                int edgeCost = (grid[r][c] == dir) ? 0 : 1;
                if (curCost + edgeCost < cost[nr][nc]) {
                    cost[nr][nc] = curCost + edgeCost;
                    if (edgeCost == 0) {
                        deque.offerFirst(new int[]{nr, nc});
                    } else {
                        deque.offerLast(new int[]{nr, nc});
                    }
                }
            }
        }

        return cost[rows - 1][cols - 1];
    }
}