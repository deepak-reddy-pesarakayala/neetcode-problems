class Solution {
    public int[] shortestDistanceAfterQueries(int n, int[][] queries) {
        List<Integer>[] adj = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            adj[i] = new ArrayList<>();
            if (i + 1 < n) {
                adj[i].add(i + 1);
            }
        }
        int qLen = queries.length;
        int[] ans = new int[qLen];
        for (int q = 0; q < qLen; q++) {
            adj[queries[q][0]].add(queries[q][1]);
            ans[q] = bfs(n, adj);
        }
        return ans;
    }
    private int bfs(int n, List<Integer>[] adj) {
        int[] dist = new int[n];
        Arrays.fill(dist, -1);
        Queue<Integer> queue = new ArrayDeque<>();
        dist[0] = 0;
        queue.offer(0);
        while (!queue.isEmpty()) {
            int curr = queue.poll();
            if (curr == n - 1) {
                return dist[curr];
            }
            for (int next : adj[curr]) {
                if (dist[next] == -1) {
                    dist[next] = dist[curr] + 1;
                    queue.offer(next);
                }
            }
        }
        return dist[n - 1];
    }
}