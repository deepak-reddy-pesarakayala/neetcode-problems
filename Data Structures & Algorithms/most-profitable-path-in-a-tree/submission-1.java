class Solution {
    public int mostProfitablePath(int[][] edges, int bob, int[] amount) {
        int n = amount.length;
        List<Integer>[] adj = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            adj[i] = new ArrayList<>();
        }
        for (int[] e : edges) {
            adj[e[0]].add(e[1]);
            adj[e[1]].add(e[0]);
        }
        int[] parent = new int[n];
        Arrays.fill(parent, -1);
        int[] depth = new int[n];
        Queue<Integer> queue = new ArrayDeque<>();
        queue.offer(0);
        depth[0] = 0;
        while (!queue.isEmpty()) {
            int u = queue.poll();
            for (int v : adj[u]) {
                if (v != parent[u]) {
                    parent[v] = u;
                    depth[v] = depth[u] + 1;
                    queue.offer(v);
                }
            }
        }
        int[] bobTime = new int[n];
        Arrays.fill(bobTime, Integer.MAX_VALUE);
        int curr = bob;
        int time = 0;
        while (curr != -1) {
            bobTime[curr] = time++;
            curr = parent[curr];
        }
        int maxIncome = Integer.MIN_VALUE;
        Deque<int[]> stack = new ArrayDeque<>();
        stack.push(new int[]{0, 0, 0});
        while (!stack.isEmpty()) {
            int[] state = stack.pop();
            int u = state[0];
            int t = state[1];
            int income = state[2];
            if (t < bobTime[u]) {
                income += amount[u];
            } else if (t == bobTime[u]) {
                income += amount[u] / 2;
            }
            boolean isLeaf = (u != 0 && adj[u].size() == 1);
            if (isLeaf) {
                maxIncome = Math.max(maxIncome, income);
                continue;
            }
            for (int v : adj[u]) {
                if (v != parent[u]) {
                    stack.push(new int[]{v, t + 1, income});
                }
            }
        }
        return maxIncome;
    }
}