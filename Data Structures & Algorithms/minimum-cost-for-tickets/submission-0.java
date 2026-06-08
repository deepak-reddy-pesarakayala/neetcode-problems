class Solution {
    public int mincostTickets(int[] days, int[] costs) {
        boolean[] travel = new boolean[366];

        for (int day : days) {
            travel[day] = true;
        }

        int[] dp = new int[366];

        for (int i = 1; i <= 365; i++) {
            if (!travel[i]) {
                dp[i] = dp[i - 1];
            } else {
                int oneDay = dp[i - 1] + costs[0];
                int sevenDay = dp[Math.max(0, i - 7)] + costs[1];
                int thirtyDay = dp[Math.max(0, i - 30)] + costs[2];

                dp[i] = Math.min(oneDay, Math.min(sevenDay, thirtyDay));
            }
        }

        return dp[365];
    }
}
