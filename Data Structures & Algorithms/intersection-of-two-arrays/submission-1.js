class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const set1 = new Set(nums1);
        const result = new Set();
        for (const num of nums2) {
            if (set1.has(num)) {
                result.add(num);
            }
        }
        return [...result];
    }
}