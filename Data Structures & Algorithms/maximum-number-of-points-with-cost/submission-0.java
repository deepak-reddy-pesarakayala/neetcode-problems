class Solution {
    public long maxPoints(int[][] points) {
        int rows = points.length;
        int cols = points[0].length;
        long[] dp = new long[cols];
        for (int c = 0; c < cols; c++) {
            dp[c] = points[0][c];
        }
        for (int r = 1; r < rows; r++) {
            long[] left = new long[cols];
            long[] right = new long[cols];
            left[0] = dp[0];
            for (int c = 1; c < cols; c++) {
                left[c] = Math.max(left[c - 1] - 1, dp[c]);
            }
            right[cols - 1] = dp[cols - 1];
            for (int c = cols - 2; c >= 0; c--) {
                right[c] = Math.max(right[c + 1] - 1, dp[c]);
            }
            long[] newDp = new long[cols];
            for (int c = 0; c < cols; c++) {
                newDp[c] = points[r][c] + Math.max(left[c], right[c]);
            }
            dp = newDp;
        }
        long answer = 0;
        for (long value : dp) {
            answer = Math.max(answer, value);
        }
        return answer;
    }
}
        