class Solution {
    public int numberOfGoodPaths(int[] vals, int[][] edges) {
        int n = vals.length;
        @SuppressWarnings("unchecked")
        java.util.List<Integer>[] adj = new java.util.ArrayList[n];
        for (int i = 0; i < n; i++) {
            adj[i] = new java.util.ArrayList<>();
        }
        for (int[] e : edges) {
            adj[e[0]].add(e[1]);
            adj[e[1]].add(e[0]);
        }

        java.util.TreeMap<Integer, java.util.List<Integer>> nodesByVal = new java.util.TreeMap<>();
        for (int i = 0; i < n; i++) {
            nodesByVal.computeIfAbsent(vals[i], k -> new java.util.ArrayList<>()).add(i);
        }

        int[] parent = new int[n];
        int[] rank = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }

        long goodPaths = n;
        java.util.Map<Integer, Integer> rootCount = new java.util.HashMap<>();

        for (java.util.Map.Entry<Integer, java.util.List<Integer>> entry : nodesByVal.entrySet()) {
            int val = entry.getKey();
            java.util.List<Integer> nodes = entry.getValue();

            for (int u : nodes) {
                for (int w : adj[u]) {
                    if (vals[w] <= val) {
                        union(parent, rank, u, w);
                    }
                }
            }

            rootCount.clear();
            for (int u : nodes) {
                int root = find(parent, u);
                rootCount.put(root, rootCount.getOrDefault(root, 0) + 1);
            }

            for (int count : rootCount.values()) {
                if (count > 1) {
                    goodPaths += (long) count * (count - 1) / 2;
                }
            }
        }

        return (int) goodPaths;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    private void union(int[] parent, int[] rank, int a, int b) {
        int ra = find(parent, a);
        int rb = find(parent, b);
        if (ra == rb) {
            return;
        }
        if (rank[ra] < rank[rb]) {
            parent[ra] = rb;
        } else if (rank[ra] > rank[rb]) {
            parent[rb] = ra;
        } else {
            parent[rb] = ra;
            rank[ra]++;
        }
    }
}