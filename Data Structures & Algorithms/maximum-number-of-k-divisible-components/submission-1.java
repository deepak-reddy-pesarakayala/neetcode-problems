class Solution {
    public int maxKDivisibleComponents(int n, int[][] edges, int[] values, int k) {
        List<List<Integer>> adj = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);
            adj.get(edge[1]).add(edge[0]);
        }

        int[] parent = new int[n];
        parent[0] = -1;
        int[] order = new int[n];
        int orderIdx = 0;

        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(0);
        while (!stack.isEmpty()) {
            int node = stack.pop();
            order[orderIdx++] = node;
            for (int next : adj.get(node)) {
                if (next != parent[node]) {
                    parent[next] = node;
                    stack.push(next);
                }
            }
        }

        long[] rem = new long[n];
        for (int i = 0; i < n; i++) {
            rem[i] = values[i] % k;
        }

        int components = 1;
        for (int i = n - 1; i >= 1; i--) {
            int node = order[i];
            long cur = rem[node] % k;
            if (cur == 0) {
                components++;
            } else {
                rem[parent[node]] = (rem[parent[node]] + cur) % k;
            }
        }

        return components;
    }
}