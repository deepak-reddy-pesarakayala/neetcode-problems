class Solution {
    private static class UnionFind {
        int[] parent;
        int[] size;
        int components;

        UnionFind(int n) {
            parent = new int[n + 1];
            size = new int[n + 1];
            components = n;
            for (int i = 1; i <= n; i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }

        UnionFind copy() {
            UnionFind clone = new UnionFind(0);
            clone.parent = this.parent.clone();
            clone.size = this.size.clone();
            clone.components = this.components;
            return clone;
        }

        int find(int x) {
            while (parent[x] != x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        }

        boolean union(int a, int b) {
            int rootA = find(a);
            int rootB = find(b);
            if (rootA == rootB) {
                return false;
            }
            if (size[rootA] < size[rootB]) {
                int tmp = rootA;
                rootA = rootB;
                rootB = tmp;
            }
            parent[rootB] = rootA;
            size[rootA] += size[rootB];
            components--;
            return true;
        }
    }

    public int maxNumEdgesToRemove(int n, int[][] edges) {
        UnionFind alice = new UnionFind(n);
        int removed = 0;

        for (int[] edge : edges) {
            if (edge[0] == 3) {
                boolean mergedAlice = alice.union(edge[1], edge[2]);
                if (!mergedAlice) {
                    removed++;
                }
            }
        }

        UnionFind bob = alice.copy();
        for (int[] edge : edges) {
            int type = edge[0];
            int u = edge[1];
            int v = edge[2];
            if (type == 1) {
                if (!alice.union(u, v)) {
                    removed++;
                }
            } else if (type == 2) {
                if (!bob.union(u, v)) {
                    removed++;
                }
            }
        }

        if (alice.components != 1 || bob.components != 1) {
            return -1;
        }

        return removed;
    }
}