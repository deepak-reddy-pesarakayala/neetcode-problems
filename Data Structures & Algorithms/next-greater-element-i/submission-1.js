class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const map = new Map();
        const stack = [];
        for (let num of nums2) {
            while (stack.length > 0 && stack[stack.length - 1] < num) {
                map.set(stack.pop(), num);
            }
            stack.push(num);
        }
        return nums1.map(num => map.get(num) ?? -1);
    }
}