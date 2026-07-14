class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let n = nums.length,
            res = 0;
        for (let i = 0; i < n; i++) {
            let curProd = 1;
            for (let j = i; j < n; j++) {
                curProd *= nums[j];
                if (curProd >= k) break;
                res++;
            }
        }
        return res;
    }
}