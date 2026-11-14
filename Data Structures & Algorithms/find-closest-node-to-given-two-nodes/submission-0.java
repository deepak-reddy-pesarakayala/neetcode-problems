class Solution {
    public int closestMeetingNode(int[] edges, int node1, int node2) {
        int n = edges.length;
        int[] dist1 = getDistances(edges, node1, n);
        int[] dist2 = getDistances(edges, node2, n);
        int minDist = Integer.MAX_VALUE;
        int ans = -1;
        for (int i = 0; i < n; i++) {
            if (dist1[i] != -1 && dist2[i] != -1) {
                int maxDist = Math.max(dist1[i], dist2[i]);
                if (maxDist < minDist) {
                    minDist = maxDist;
                    ans = i;
                }
            }
        }
        return ans;
    }
    private int[] getDistances(int[] edges, int start, int n) {
        int[] dist = new int[n];
        Arrays.fill(dist, -1);
        int d = 0;
        int curr = start;
        while (curr != -1 && dist[curr] == -1) {
            dist[curr] = d++;
            curr = edges[curr];
        }
        return dist;
    }
}