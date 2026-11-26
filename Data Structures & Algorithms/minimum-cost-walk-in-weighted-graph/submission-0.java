class Solution {
    public int[] minimumCost(int n, int[][] edges, int[][] query) {
        int[] parent = new int[n];
        int[] rank = new int[n];
        int[] compAnd = new int[n];

        for (int i = 0; i < n; i++) {
            parent[i] = i;
            compAnd[i] = -1;
        }

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];

            int ru = find(parent, u);
            int rv = find(parent, v);

            if (ru != rv) {
                if (rank[ru] < rank[rv]) {
                    int tmp = ru;
                    ru = rv;
                    rv = tmp;
                }
                parent[rv] = ru;
                if (rank[ru] == rank[rv]) {
                    rank[ru]++;
                }
                int merged = w;
                if (compAnd[ru] != -1) {
                    merged &= compAnd[ru];
                }
                if (compAnd[rv] != -1) {
                    merged &= compAnd[rv];
                }
                compAnd[ru] = merged;
            } else {
                compAnd[ru] = (compAnd[ru] == -1) ? w : (compAnd[ru] & w);
            }
        }

        int[] ans = new int[query.length];
        for (int i = 0; i < query.length; i++) {
            int s = query[i][0];
            int e = query[i][1];
            int rs = find(parent, s);
            int re = find(parent, e);
            ans[i] = (rs == re) ? compAnd[rs] : -1;
        }

        return ans;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
}