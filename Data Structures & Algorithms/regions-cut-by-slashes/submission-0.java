class Solution {
    class DSU {
        int[] parent;
        int count;
        DSU(int size) {
            parent = new int[size];
            for (int i = 0; i < size; i++) parent[i] = i;
            count = size;
        }
        int find(int i) {
            if (parent[i] == i) return i;
            return parent[i] = find(parent[i]);
        }
        void union(int i, int j) {
            int rootI = find(i);
            int rootJ = find(j);
            if (rootI != rootJ) {
                parent[rootI] = rootJ;
                count--;
            }
        }
    }
    public int regionsBySlashes(String[] grid) {
        int n = grid.length;
        DSU dsu = new DSU(n * n * 4);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int base = 4 * (i * n + j);
                char c = grid[i].charAt(j);
                if (c == '/') {
                    dsu.union(base + 0, base + 3);
                    dsu.union(base + 1, base + 2);
                } else if (c == '\\') {
                    dsu.union(base + 0, base + 1);
                    dsu.union(base + 2, base + 3);
                } else {
                    dsu.union(base + 0, base + 1);
                    dsu.union(base + 1, base + 2);
                    dsu.union(base + 2, base + 3);
                }
                if (i + 1 < n) {
                    dsu.union(base + 2, 4 * ((i + 1) * n + j) + 0);
                }
                if (j + 1 < n) {
                    dsu.union(base + 1, 4 * (i * n + (j + 1)) + 3);
                }
            }
        }
        return dsu.count;
    }
}