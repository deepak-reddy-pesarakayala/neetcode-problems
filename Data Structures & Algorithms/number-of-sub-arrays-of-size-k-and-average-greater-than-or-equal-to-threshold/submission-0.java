class Solution {
    public int numOfSubarrays(int[] arr, int k, int threshold) {
        int targetSum = k * threshold;
        int sum = 0;
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (i >= k) {
                sum -= arr[i - k];
            }
            if (i >= k - 1 && sum >= targetSum) {
                count++;
            }
        }
        return count;
    }
}