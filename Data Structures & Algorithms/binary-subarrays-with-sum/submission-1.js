class Solution {
    /**
     * @param {number[]} nums
     * @param {number} goal
     * @return {number}
     */
    numSubarraysWithSum(nums, goal) {
        const n = nums.length;
        let res = 0;
        for (let i = 0; i < n; i++) {
            let curSum = 0;
            for (let j = i; j < n; j++) {
                curSum += nums[j];
                if (curSum === goal) {
                    res++;
                }
            }
        }
        return res;
    }
}