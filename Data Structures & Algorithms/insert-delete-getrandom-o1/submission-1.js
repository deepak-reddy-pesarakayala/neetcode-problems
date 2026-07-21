class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        const map = new Map();
        map.set(0, -1); 
        let prefixSum = 0;
        for (let i = 0; i < nums.length; i++) {
            prefixSum += nums[i];
            const rem = prefixSum % k;
            if (map.has(rem)) {
                if (i - map.get(rem) >= 2) {
                    return true;
                }
            } else {
                map.set(rem, i);
            }
        }
        return false;
    }
}