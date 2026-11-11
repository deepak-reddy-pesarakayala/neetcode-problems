class Solution {
    public int minReorder(int n, int[][] connections) {
        List<int[]>[] adj = new List[n];
        for (int i = 0; i < n; i++) {
            adj[i] = new ArrayList<>();
        }
        for (int[] c : connections) {
            adj[c[0]].add(new int[]{c[1], 1});
            adj[c[1]].add(new int[]{c[0], 0});
        }
        boolean[] visited = new boolean[n];
        int reversals = 0;
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(0);
        visited[0] = true;
        while (!queue.isEmpty()) {
            int u = queue.poll();
            for (int[] neighbor : adj[u]) {
                int v = neighbor[0];
                int cost = neighbor[1];
                if (!visited[v]) {
                    visited[v] = true;
                    reversals += cost;
                    queue.offer(v);
                }
            }
        }
        return reversals;
    }
}