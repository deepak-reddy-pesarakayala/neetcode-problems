class Solution {
    public long putMarbles(int[] weights, int k) {
        int n = weights.length;
        if (k == 1) {
            return 0;
        }
        long[] pairSum = new long[n - 1];
        for (int i = 0; i < n - 1; i++) {
            pairSum[i] = (long) weights[i] + weights[i + 1];
        }
        Arrays.sort(pairSum);
        long minScore = 0;
        long maxScore = 0;
        for (int i = 0; i < k - 1; i++) {
            minScore += pairSum[i];
            maxScore += pairSum[n - 2 - i];
        }
        return maxScore - minScore;
    }
}