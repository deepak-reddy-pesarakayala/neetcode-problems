class Solution {
    public int maxPerformance(int n, int[] speed, int[] efficiency, int k) {
        int[][] engineers = new int[n][2];
        for (int i = 0; i < n; i++) {
            engineers[i][0] = efficiency[i];
            engineers[i][1] = speed[i];
        }
        java.util.Arrays.sort(engineers, (a, b) -> Integer.compare(b[0], a[0]));
        java.util.PriorityQueue<Integer> speedQueue = new java.util.PriorityQueue<>();
        long totalSpeed = 0;
        long maxPerf = 0;
        long mod = 1000000007;
        for (int[] engineer : engineers) {
            int eff = engineer[0];
            int spd = engineer[1];
            speedQueue.offer(spd);
            totalSpeed += spd;
            if (speedQueue.size() > k) {
                totalSpeed -= speedQueue.poll();
            }
            maxPerf = Math.max(maxPerf, totalSpeed * eff);
        }
        return (int) (maxPerf % mod);
    }
}