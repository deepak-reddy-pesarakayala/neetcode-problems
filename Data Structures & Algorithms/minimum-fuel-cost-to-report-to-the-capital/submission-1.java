class Solution {
    public long minimumFuelCost(int[][] roads, int seats) {
        int n = roads.length + 1;
        if (n == 1) return 0;
        List<Integer>[] graph = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        int[] degree = new int[n];
        for (int[] r : roads) {
            graph[r[0]].add(r[1]);
            graph[r[1]].add(r[0]);
            degree[r[0]]++;
            degree[r[1]]++;
        }
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 1; i < n; i++) {
            if (degree[i] == 1) {
                queue.offer(i);
            }
        }
        long totalFuel = 0;
        int[] count = new int[n];
        Arrays.fill(count, 1);
        while (!queue.isEmpty()) {
            int u = queue.poll();
            int p = -1;
            for (int v : graph[u]) {
                if (degree[v] > 0) {
                    p = v;
                    break;
                }
            }
            if (p != -1) {
                totalFuel += (long) (count[u] + seats - 1) / seats;
                count[p] += count[u];
                degree[u]--;
                degree[p]--;
                if (p != 0 && degree[p] == 1) {
                    queue.offer(p);
                }
            }
        }
        return totalFuel;
    }
}