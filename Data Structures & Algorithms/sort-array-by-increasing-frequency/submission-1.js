class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
        nums.sort((a, b) => {
            const fa = freq.get(a);
            const fb = freq.get(b);
            if (fa !== fb) {
                return fa - fb;
            }
            return b - a;
        });
        return nums;
    }
}