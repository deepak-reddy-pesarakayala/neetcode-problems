class Solution {
    private static final long INF = 1_000_000_000_000L;

    public long minimumCost(String source, String target, char[] original, char[] changed, int[] cost) {
        long[][] minCost = new long[26][26];
        for (int i = 0; i < 26; i++) {
            java.util.Arrays.fill(minCost[i], INF);
            minCost[i][i] = 0L;
        }

        for (int i = 0; i < original.length; i++) {
            int u = original[i] - 'a';
            int v = changed[i] - 'a';
            if (cost[i] < minCost[u][v]) {
                minCost[u][v] = cost[i];
            }
        }

        for (int k = 0; k < 26; k++) {
            for (int u = 0; u < 26; u++) {
                if (minCost[u][k] == INF) {
                    continue;
                }
                for (int v = 0; v < 26; v++) {
                    long throughK = minCost[u][k] + minCost[k][v];
                    if (throughK < minCost[u][v]) {
                        minCost[u][v] = throughK;
                    }
                }
            }
        }

        long totalCost = 0L;
        int n = source.length();
        for (int i = 0; i < n; i++) {
            int u = source.charAt(i) - 'a';
            int v = target.charAt(i) - 'a';
            if (minCost[u][v] == INF) {
                return -1L;
            }
            totalCost += minCost[u][v];
        }

        return totalCost;
    }
}