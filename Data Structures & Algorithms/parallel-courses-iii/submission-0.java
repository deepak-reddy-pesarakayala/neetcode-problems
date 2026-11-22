class Solution {
    public int minimumTime(int n, int[][] relations, int[] time) {
        List<List<Integer>> adj = new ArrayList<>(n + 1);
        for (int i = 0; i <= n; i++) {
            adj.add(new ArrayList<>());
        }

        int[] inDegree = new int[n + 1];
        for (int[] rel : relations) {
            int before = rel[0];
            int after = rel[1];
            adj.get(before).add(after);
            inDegree[after]++;
        }

        int[] earliestStart = new int[n + 1];
        int[] finishTime = new int[n + 1];
        Queue<Integer> queue = new ArrayDeque<>();

        for (int i = 1; i <= n; i++) {
            finishTime[i] = time[i - 1];
            if (inDegree[i] == 0) {
                queue.offer(i);
            }
        }

        int ans = 0;
        while (!queue.isEmpty()) {
            int u = queue.poll();
            if (finishTime[u] > ans) {
                ans = finishTime[u];
            }

            for (int v : adj.get(u)) {
                if (finishTime[u] > earliestStart[v]) {
                    earliestStart[v] = finishTime[u];
                    finishTime[v] = earliestStart[v] + time[v - 1];
                }
                if (--inDegree[v] == 0) {
                    queue.offer(v);
                }
            }
        }

        return ans;
    }
}