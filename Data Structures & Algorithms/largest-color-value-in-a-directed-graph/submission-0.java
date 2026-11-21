class Solution {
    public int largestPathValue(String colors, int[][] edges) {
        int n = colors.length();
        List<List<Integer>> adj = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        int[] inDegree = new int[n];
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            adj.get(u).add(v);
            inDegree[v]++;
        }

        Queue<Integer> queue = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            if (inDegree[i] == 0) {
                queue.offer(i);
            }
        }

        int[][] dp = new int[n][26];
        int visited = 0;
        int ans = 0;

        while (!queue.isEmpty()) {
            int u = queue.poll();
            visited++;

            int colorIdx = colors.charAt(u) - 'a';
            dp[u][colorIdx]++;

            for (int c = 0; c < 26; c++) {
                if (dp[u][c] > ans) {
                    ans = dp[u][c];
                }
            }

            for (int v : adj.get(u)) {
                for (int c = 0; c < 26; c++) {
                    if (dp[u][c] > dp[v][c]) {
                        dp[v][c] = dp[u][c];
                    }
                }
                inDegree[v]--;
                if (inDegree[v] == 0) {
                    queue.offer(v);
                }
            }
        }

        return visited == n ? ans : -1;
    }
}