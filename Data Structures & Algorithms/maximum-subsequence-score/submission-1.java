class Solution {
    public long maxScore(int[] nums1, int[] nums2, int k) {
        int n = nums1.length;
        int[][] pairs = new int[n][2];
        for (int i = 0; i < n; i++) {
            pairs[i][0] = nums1[i];
            pairs[i][1] = nums2[i];
        }
        java.util.Arrays.sort(pairs, (a, b) -> Integer.compare(b[1], a[1]));
        java.util.PriorityQueue<Integer> pq = new java.util.PriorityQueue<>();
        long sum = 0;
        long maxScore = 0;
        for (int i = 0; i < n; i++) {
            pq.offer(pairs[i][0]);
            sum += pairs[i][0];
            if (pq.size() > k) {
                sum -= pq.poll();
            }
            if (pq.size() == k) {
                maxScore = Math.max(maxScore, sum * pairs[i][1]);
            }
        }
        return maxScore;
    }
}