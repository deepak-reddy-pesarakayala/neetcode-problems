class Solution {
    public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
        int n = startTime.length;

        int[][] jobs = new int[n][3];

        for (int i = 0; i < n; i++) {
            jobs[i][0] = startTime[i];
            jobs[i][1] = endTime[i];
            jobs[i][2] = profit[i];
        }

        Arrays.sort(jobs, (a, b) -> a[0] - b[0]);

        int[] dp = new int[n];

        return solve(0, jobs, dp);
    }

    private int solve(int index, int[][] jobs, int[] dp) {
        if (index == jobs.length) {
            return 0;
        }

        if (dp[index] != 0) {
            return dp[index];
        }

        int nextIndex = findNextJob(jobs, jobs[index][1]);

        int take = jobs[index][2] + solve(nextIndex, jobs, dp);
        int notTake = solve(index + 1, jobs, dp);

        dp[index] = Math.max(take, notTake);
        return dp[index];
    }

    private int findNextJob(int[][] jobs, int endTime) {
        int low = 0;
        int high = jobs.length - 1;
        int ans = jobs.length;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (jobs[mid][0] >= endTime) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}
        