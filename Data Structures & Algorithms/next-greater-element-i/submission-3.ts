class Solution {
    nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        const stack: number[] = [];
        const map = new Map<number, number>();
        for (let i = nums2.length - 1; i >= 0; i--) {
            while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
                stack.pop();
            }
            map.set(nums2[i], stack.length > 0 ? stack[stack.length - 1] : -1);
            stack.push(nums2[i]);
        }
        return nums1.map(num => map.get(num)!);
    }
}