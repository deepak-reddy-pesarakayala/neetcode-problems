class Solution {
    public int[] shortestAlternatingPaths(int n, int[][] redEdges, int[][] blueEdges) {
        List<Integer>[] red = new ArrayList[n];
        List<Integer>[] blue = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            red[i] = new ArrayList<>();
            blue[i] = new ArrayList<>();
        }
        for (int[] e : redEdges) red[e[0]].add(e[1]);
        for (int[] e : blueEdges) blue[e[0]].add(e[1]);
        int[] ans = new int[n];
        Arrays.fill(ans, -1);
        boolean[][] visited = new boolean[n][2];
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0, 0, 0});
        queue.offer(new int[]{0, 1, 0});
        visited[0][0] = true;
        visited[0][1] = true;
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int u = curr[0], color = curr[1], dist = curr[2];
            if (ans[u] == -1 || dist < ans[u]) {
                ans[u] = dist;
            }
            if (color == 0) {
                for (int v : blue[u]) {
                    if (!visited[v][1]) {
                        visited[v][1] = true;
                        queue.offer(new int[]{v, 1, dist + 1});
                    }
                }
            } else {
                for (int v : red[u]) {
                    if (!visited[v][0]) {
                        visited[v][0] = true;
                        queue.offer(new int[]{v, 0, dist + 1});
                    }
                }
            }
        }
        return ans;
    }
}