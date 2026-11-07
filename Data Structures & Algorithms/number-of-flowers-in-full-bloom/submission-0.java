class Solution {
    public int[] fullBloomFlowers(int[][] flowers, int[] people) {
        int n = flowers.length;
        int[] starts = new int[n];
        int[] ends = new int[n];
        for (int i = 0; i < n; i++) {
            starts[i] = flowers[i][0];
            ends[i] = flowers[i][1];
        }
        java.util.Arrays.sort(starts);
        java.util.Arrays.sort(ends);
        int m = people.length;
        int[] ans = new int[m];
        for (int i = 0; i < m; i++) {
            int p = people[i];
            int started = binarySearchUpperBound(starts, p);
            int ended = binarySearchLowerBound(ends, p);
            ans[i] = started - ended;
        }
        return ans;
    }
    private int binarySearchUpperBound(int[] arr, int target) {
        int left = 0, right = arr.length;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
    private int binarySearchLowerBound(int[] arr, int target) {
        int left = 0, right = arr.length;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}