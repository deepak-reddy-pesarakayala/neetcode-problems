class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const count = new Map();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        let i = 0;
        for (const [num, cnt] of count) {
            nums[i++] = num;
            count.set(num, cnt - 1);
            if (count.get(num) >= 1) {
                nums[i++] = num;
                count.set(num, cnt - 1);
            }
        }
        return i;
    }
}