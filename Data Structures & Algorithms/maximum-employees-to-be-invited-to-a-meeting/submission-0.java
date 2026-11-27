class Solution {
    public int maximumInvitations(int[] favorite) {
        int n = favorite.length;
        int[] inDegree = new int[n];
        for (int i = 0; i < n; i++) {
            inDegree[favorite[i]]++;
        }
        int[] depth = new int[n];
        boolean[] visited = new boolean[n];
        Queue<Integer> queue = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            if (inDegree[i] == 0) {
                queue.offer(i);
            }
        }
        while (!queue.isEmpty()) {
            int u = queue.poll();
            visited[u] = true;
            int v = favorite[u];
            depth[v] = Math.max(depth[v], depth[u] + 1);
            if (--inDegree[v] == 0) {
                queue.offer(v);
            }
        }
        int maxCycle = 0;
        int pairTotal = 0;
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                int len = 0;
                int curr = i;
                while (!visited[curr]) {
                    visited[curr] = true;
                    curr = favorite[curr];
                    len++;
                }
                if (len == 2) {
                    int partner = favorite[i];
                    pairTotal += 2 + depth[i] + depth[partner];
                } else if (len > maxCycle) {
                    maxCycle = len;
                }
            }
        }
        return Math.max(maxCycle, pairTotal);
    }
}