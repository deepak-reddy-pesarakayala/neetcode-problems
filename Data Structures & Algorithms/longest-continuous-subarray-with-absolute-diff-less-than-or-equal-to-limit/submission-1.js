class Solution {
    /**
     * @param {number[]} nums
     * @param {number} limit
     * @return {number}
     */
    longestSubarray(nums, limit) {
        const n = nums.length;
        let res = 1;
        for (let i = 0; i < n; i++) {
            let mini = nums[i],
                maxi = nums[i];
            for (let j = i + 1; j < n; j++) {
                mini = Math.min(mini, nums[j]);
                maxi = Math.max(maxi, nums[j]);
                if (maxi - mini > limit) {
                    break;
                }
                res = Math.max(res, j - i + 1);
            }
        }
        return res;
    }
}