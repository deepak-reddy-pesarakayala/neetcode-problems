class Solution {
    private static final long MOD = 1_000_000_007L;

    public int countPaths(int n, int[][] roads) {
        java.util.List<int[]>[] adj = new java.util.ArrayList[n];
        for (int i = 0; i < n; i++) {
            adj[i] = new java.util.ArrayList<>();
        }

        for (int[] road : roads) {
            int u = road[0];
            int v = road[1];
            int time = road[2];
            adj[u].add(new int[]{v, time});
            adj[v].add(new int[]{u, time});
        }

        long[] dist = new long[n];
        long[] ways = new long[n];
        java.util.Arrays.fill(dist, Long.MAX_VALUE);
        dist[0] = 0L;
        ways[0] = 1L;

        java.util.PriorityQueue<long[]> pq = new java.util.PriorityQueue<>(
            java.util.Comparator.comparingLong(a -> a[0])
        );
        pq.offer(new long[]{0L, 0L});

        while (!pq.isEmpty()) {
            long[] cur = pq.poll();
            long d = cur[0];
            int u = (int) cur[1];

            if (d > dist[u]) {
                continue;
            }

            for (int[] edge : adj[u]) {
                int v = edge[0];
                long nextDist = d + edge[1];

                if (nextDist < dist[v]) {
                    dist[v] = nextDist;
                    ways[v] = ways[u];
                    pq.offer(new long[]{nextDist, v});
                } else if (nextDist == dist[v]) {
                    ways[v] = (ways[v] + ways[u]) % MOD;
                }
            }
        }

        return (int) ways[n - 1];
    }
}