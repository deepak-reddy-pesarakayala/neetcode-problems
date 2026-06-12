class Solution {
    public long kthSmallestProduct(int[] nums1, int[] nums2, long k) {
        long left = -10000000000L;
        long right = 10000000000L;
        while (left < right) {
            long mid = left + (right - left) / 2;
            if (countLessEqual(nums1, nums2, mid) >= k) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    private long countLessEqual(int[] nums1, int[] nums2, long target) {
        long count = 0;
        int n = nums2.length;
        for (int num : nums1) {
            if (num > 0) {
                int left = 0, right = n;
                while (left < right) {
                    int mid = left + (right - left) / 2;
                    if ((long) num * nums2[mid] <= target) {
                        left = mid + 1;
                    } else {
                        right = mid;
                    }
                }
                count += left;
            } 
            else if (num < 0) {
                int left = 0, right = n;

                while (left < right) {
                    int mid = left + (right - left) / 2;

                    if ((long) num * nums2[mid] <= target) {
                        right = mid;
                    } else {
                        left = mid + 1;
                    }
                }
                count += n - left;
            } 
            else {
                if (target >= 0) {
                    count += n;
                }
            }
        }
        return count;
    }
}