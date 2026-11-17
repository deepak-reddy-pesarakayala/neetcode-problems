class Solution {
    public int countCompleteComponents(int n, int[][] edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }
        boolean[] visited = new boolean[n];
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                List<Integer> comp = new ArrayList<>();
                Queue<Integer> q = new LinkedList<>();
                q.offer(i);
                visited[i] = true;
                while (!q.isEmpty()) {
                    int u = q.poll();
                    comp.add(u);
                    for (int v : adj.get(u)) {
                        if (!visited[v]) {
                            visited[v] = true;
                            q.offer(v);
                        }
                    }
                }
                int vCount = comp.size();
                int eCount = 0;
                for (int u : comp) {
                    eCount += adj.get(u).size();
                }
                eCount /= 2;
                if (eCount == vCount * (vCount - 1) / 2) {
                    count++;
                }
            }
        }
        return count;
    }
}