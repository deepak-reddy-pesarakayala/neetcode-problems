class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        for (let L = 0; L < nums.length; L++) {
            for (let R = L + 1; R < Math.min(nums.length, L + k + 1); R++) {
                if (nums[L] === nums[R]) {
                    return true;
                }
            }
        }
        return false;
    }
}