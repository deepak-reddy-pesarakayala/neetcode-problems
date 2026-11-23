class Solution {
    private static final int[] DIRS = {-1, 0, 1, 0, -1};

    public int trapRainWater(int[][] heightMap) {
        int m = heightMap.length;
        int n = heightMap[0].length;
        if (m < 3 || n < 3) {
            return 0;
        }

        boolean[][] visited = new boolean[m][n];
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> Integer.compare(a[2], b[2]));

        for (int r = 0; r < m; r++) {
            visited[r][0] = true;
            minHeap.offer(new int[]{r, 0, heightMap[r][0]});

            visited[r][n - 1] = true;
            minHeap.offer(new int[]{r, n - 1, heightMap[r][n - 1]});
        }

        for (int c = 1; c < n - 1; c++) {
            visited[0][c] = true;
            minHeap.offer(new int[]{0, c, heightMap[0][c]});

            visited[m - 1][c] = true;
            minHeap.offer(new int[]{m - 1, c, heightMap[m - 1][c]});
        }

        int water = 0;
        while (!minHeap.isEmpty()) {
            int[] cur = minHeap.poll();
            int r = cur[0];
            int c = cur[1];
            int level = cur[2];

            for (int d = 0; d < 4; d++) {
                int nr = r + DIRS[d];
                int nc = c + DIRS[d + 1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
                    visited[nr][nc] = true;
                    int cellHeight = heightMap[nr][nc];
                    if (cellHeight < level) {
                        water += level - cellHeight;
                        minHeap.offer(new int[]{nr, nc, level});
                    } else {
                        minHeap.offer(new int[]{nr, nc, cellHeight});
                    }
                }
            }
        }

        return water;
    }
}