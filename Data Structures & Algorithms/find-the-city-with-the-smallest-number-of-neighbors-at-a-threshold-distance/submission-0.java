class Solution {
    private static final int INF = 1_000_000_000;

    public int findTheCity(int n, int[][] edges, int distanceThreshold) {
        int[][] dist = new int[n][n];
        for (int i = 0; i < n; i++) {
            java.util.Arrays.fill(dist[i], INF);
            dist[i][i] = 0;
        }

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];
            if (w < dist[u][v]) {
                dist[u][v] = w;
                dist[v][u] = w;
            }
        }

        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                if (dist[i][k] == INF) {
                    continue;
                }
                for (int j = 0; j < n; j++) {
                    int throughK = dist[i][k] + dist[k][j];
                    if (throughK < dist[i][j]) {
                        dist[i][j] = throughK;
                    }
                }
            }
        }

        int bestCity = -1;
        int minReachable = n;

        for (int i = 0; i < n; i++) {
            int reachable = 0;
            for (int j = 0; j < n; j++) {
                if (i != j && dist[i][j] <= distanceThreshold) {
                    reachable++;
                }
            }
            if (reachable <= minReachable) {
                minReachable = reachable;
                bestCity = i;
            }
        }

        return bestCity;
    }
}