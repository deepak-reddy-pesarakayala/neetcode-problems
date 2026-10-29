public class Solution {
    public int beautifulSubsets(int[] nums, int k) {
        Arrays.sort(nums);
        int[] count = new int[2001];
        return dfs(nums, k, 0, count) - 1;
    }

    private int dfs(int[] nums, int k, int idx, int[] count) {
        if (idx == nums.length) {
            return 1;
        }

        int res = dfs(nums, k, idx + 1, count);

        int val = nums[idx];
        if (val - k < 0 || count[val - k] == 0) {
            count[val]++;
            res += dfs(nums, k, idx + 1, count);
            count[val]--;
        }

        return res;
    }
}