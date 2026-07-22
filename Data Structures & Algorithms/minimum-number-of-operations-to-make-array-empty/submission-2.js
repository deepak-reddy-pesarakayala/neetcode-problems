class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minOperations(nums) {
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
        let operations = 0;
        for (const count of freq.values()) {
            if (count === 1) return -1;
            operations += Math.ceil(count / 3);
        }
        return operations;
    }
}