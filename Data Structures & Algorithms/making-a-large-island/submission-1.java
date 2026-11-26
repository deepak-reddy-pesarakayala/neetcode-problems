class Solution {
    private static final int[] DIRS = {-1, 0, 1, 0, -1};

    public int largestIsland(int[][] grid) {
        int n = grid.length;
        java.util.Map<Integer, Integer> areaById = new java.util.HashMap<>();
        int nextId = 2;
        int maxArea = 0;

        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (grid[r][c] == 1) {
                    int area = bfsArea(grid, r, c, n, nextId);
                    areaById.put(nextId, area);
                    if (area > maxArea) {
                        maxArea = area;
                    }
                    nextId++;
                }
            }
        }

        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (grid[r][c] == 0) {
                    int[] seenIds = new int[4];
                    int seenCount = 0;
                    int candidateArea = 1;

                    for (int d = 0; d < 4; d++) {
                        int nr = r + DIRS[d];
                        int nc = c + DIRS[d + 1];
                        if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                            int id = grid[nr][nc];
                            if (id >= 2 && !contains(seenIds, seenCount, id)) {
                                seenIds[seenCount++] = id;
                                candidateArea += areaById.get(id);
                            }
                        }
                    }

                    if (candidateArea > maxArea) {
                        maxArea = candidateArea;
                    }
                }
            }
        }

        return maxArea;
    }

    private int bfsArea(int[][] grid, int startR, int startC, int n, int id) {
        java.util.ArrayDeque<int[]> queue = new java.util.ArrayDeque<>();
        grid[startR][startC] = id;
        queue.offer(new int[]{startR, startC});
        int area = 0;

        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int r = cur[0];
            int c = cur[1];
            area++;

            for (int d = 0; d < 4; d++) {
                int nr = r + DIRS[d];
                int nc = c + DIRS[d + 1];
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                    grid[nr][nc] = id;
                    queue.offer(new int[]{nr, nc});
                }
            }
        }

        return area;
    }

    private boolean contains(int[] arr, int len, int target) {
        for (int i = 0; i < len; i++) {
            if (arr[i] == target) {
                return true;
            }
        }
        return false;
    }
}