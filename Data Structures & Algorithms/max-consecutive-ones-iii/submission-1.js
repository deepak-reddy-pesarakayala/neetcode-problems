class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let res = 0;
        for (let l = 0; l < nums.length; l++) {
            let cnt = 0,
                r = l;
            while (r < nums.length) {
                if (nums[r] === 0) {
                    if (cnt === k) break;
                    cnt++;
                }
                r++;
            }
            res = Math.max(res, r - l);
        }
        return res;
    }
}