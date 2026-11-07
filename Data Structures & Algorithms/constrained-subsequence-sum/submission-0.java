class Solution {
    public long constrainedSubsetSum(int[] nums, int k) {
        int n = nums.length;
        long[] dp = new long[n];
        long maxSum = nums[0];
        Deque<Integer> deque = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            dp[i] = nums[i];
            if (!deque.isEmpty()) {
                dp[i] += Math.max(0, dp[deque.peekFirst()]);
            }
            maxSum = Math.max(maxSum, dp[i]);
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }
            while (!deque.isEmpty() && dp[deque.peekLast()] <= dp[i]) {
                deque.pollLast();
            }
            deque.offerLast(i);
        }
        return maxSum;
    }
}