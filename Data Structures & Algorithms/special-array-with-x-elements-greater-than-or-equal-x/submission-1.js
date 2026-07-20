class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    specialArray(nums) {
        const n = nums.length;
        for (let x = 0; x <= n; x++) {
            let count = 0;
            for (const num of nums) {
                if (num >= x) {
                    count++;
                }
            }
            if (count === x) {
                return x;
            }
        }
        return -1;
    }
}