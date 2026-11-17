class Solution {
    public boolean isBipartite(int[][] graph) {
        int n = graph.length;
        int[] colors = new int[n];
        for (int i = 0; i < n; i++) {
            if (colors[i] == 0) {
                Queue<Integer> q = new LinkedList<>();
                q.offer(i);
                colors[i] = 1;
                while (!q.isEmpty()) {
                    int node = q.poll();
                    for (int neighbor : graph[node]) {
                        if (colors[neighbor] == 0) {
                            colors[neighbor] = -colors[node];
                            q.offer(neighbor);
                        } else if (colors[neighbor] == colors[node]) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }
}