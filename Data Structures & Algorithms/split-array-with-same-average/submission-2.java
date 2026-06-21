class Solution {
    public boolean splitArraySameAverage(int[] nums) {
        int n = nums.length;
        int sum = 0;

        for (int num : nums) {
            sum += num;
        }

        Set<Integer>[] dp = new HashSet[n + 1];

        for (int i = 0; i <= n; i++) {
            dp[i] = new HashSet<>();
        }

        dp[0].add(0);

        for (int num : nums) {
            for (int size = n - 1; size >= 0; size--) {
                for (int s : new HashSet<>(dp[size])) {
                    dp[size + 1].add(s + num);
                }
            }
        }

        for (int size = 1; size < n; size++) {
            if ((sum * size) % n == 0) {
                int target = (sum * size) / n;

                if (dp[size].contains(target)) {
                    return true;
                }
            }
        }

        return false;
    }
}