class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysWithKDistinct(nums, k) {
        let n = nums.length,
            res = 0;
        for (let i = 0; i < n; i++) {
            let seen = new Set();
            for (let j = i; j < n; j++) {
                seen.add(nums[j]);
                if (seen.size > k) {
                    break;
                }
                if (seen.size === k) {
                    res++;
                }
            }
        }
        return res;
    }
}