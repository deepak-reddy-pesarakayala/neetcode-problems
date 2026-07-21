class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixCount = new Map();
        prefixCount.set(0, 1);
        let prefixSum = 0;
        let result = 0;
        for (const num of nums) {
            prefixSum += num;
            if (prefixCount.has(prefixSum - k)) {
                result += prefixCount.get(prefixSum - k);
            }
            prefixCount.set(
                prefixSum,
                (prefixCount.get(prefixSum) || 0) + 1
            );
        }
        return result;
    }
}