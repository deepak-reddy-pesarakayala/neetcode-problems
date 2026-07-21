class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1, nums2) {
        const set1 = new Set(nums1);
        const set2 = new Set(nums2);
        const onlyInNums1 = [];
        const onlyInNums2 = [];
        for (const num of set1) {
            if (!set2.has(num)) {
                onlyInNums1.push(num);
            }
        }
        for (const num of set2) {
            if (!set1.has(num)) {
                onlyInNums2.push(num);
            }
        }
        return [onlyInNums1, onlyInNums2];
    }
}