class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        nums.sort((a, b) => a - b);
        const prefixSum = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }
        let res = 1;
        for (let i = 0; i < nums.length; i++) {
            let left = 0,
                right = i;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                const curSum = prefixSum[i + 1] - prefixSum[mid];
                const need = (i - mid + 1) * nums[i] - curSum;
                if (need <= k) {
                    right = mid - 1;
                    res = Math.max(res, i - mid + 1);
                } else {
                    left = mid + 1;
                }
            }
        }
        return res;
    }
}