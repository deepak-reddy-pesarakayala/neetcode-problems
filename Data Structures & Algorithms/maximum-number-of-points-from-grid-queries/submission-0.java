class Solution {
    private static class DSU {
        int[] parent;
        int[] size;

        DSU(int n) {
            parent = new int[n];
            size = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }

        int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }

        void union(int a, int b) {
            int ra = find(a);
            int rb = find(b);
            if (ra == rb) {
                return;
            }
            if (size[ra] < size[rb]) {
                int tmp = ra;
                ra = rb;
                rb = tmp;
            }
            parent[rb] = ra;
            size[ra] += size[rb];
        }
    }

    public int[] maxPoints(int[][] grid, int[] queries) {
        int m = grid.length;
        int n = grid[0].length;
        int totalCells = m * n;

        int[][] cells = new int[totalCells][3];
        int idx = 0;
        for (int r = 0; r < m; r++) {
            for (int c = 0; c < n; c++) {
                cells[idx][0] = grid[r][c];
                cells[idx][1] = r;
                cells[idx][2] = c;
                idx++;
            }
        }
        Arrays.sort(cells, Comparator.comparingInt(a -> a[0]));

        int qLen = queries.length;
        int[][] indexedQueries = new int[qLen][2];
        for (int i = 0; i < qLen; i++) {
            indexedQueries[i][0] = queries[i];
            indexedQueries[i][1] = i;
        }
        Arrays.sort(indexedQueries, Comparator.comparingInt(a -> a[0]));

        boolean[] active = new boolean[totalCells];
        DSU dsu = new DSU(totalCells);
        int[] ans = new int[qLen];
        int cellPtr = 0;
        int[] dirs = {-1, 0, 1, 0, -1};

        for (int[] q : indexedQueries) {
            int qVal = q[0];
            int qIdx = q[1];

            while (cellPtr < totalCells && cells[cellPtr][0] < qVal) {
                int r = cells[cellPtr][1];
                int c = cells[cellPtr][2];
                int id = r * n + c;
                active[id] = true;

                for (int d = 0; d < 4; d++) {
                    int nr = r + dirs[d];
                    int nc = c + dirs[d + 1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                        int nid = nr * n + nc;
                        if (active[nid]) {
                            dsu.union(id, nid);
                        }
                    }
                }
                cellPtr++;
            }

            if (active[0]) {
                ans[qIdx] = dsu.size[dsu.find(0)];
            } else {
                ans[qIdx] = 0;
            }
        }

        return ans;
    }
}