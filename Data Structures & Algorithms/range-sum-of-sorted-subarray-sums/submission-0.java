class Solution {
    public int rangeSum(int[] nums, int n, int left, int right) {
        int[] sums = new int[n * (n + 1) / 2];
        int index = 0;
        for (int i = 0; i < n; i++) {
            int currentSum = 0;
            for (int j = i; j < n; j++) {
                currentSum += nums[j];
                sums[index++] = currentSum;
            }
        }
        java.util.Arrays.sort(sums);
        long totalSum = 0;
        int mod = 1000000007;
        for (int i = left - 1; i < right; i++) {
            totalSum = (totalSum + sums[i]) % mod;
        }
        return (int) totalSum;
    }
}