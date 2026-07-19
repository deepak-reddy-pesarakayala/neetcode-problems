class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        let drops = 0;
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            const nextIndex = (i + 1) % n;
            if (nums[i] > nums[nextIndex]) {
                drops++;
            }
            if (drops > 1) {
                return false;
            }
        }
        return true;
    }
}