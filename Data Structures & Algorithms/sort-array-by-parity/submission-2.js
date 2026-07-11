class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        const even = [];
        const odd = [];
        for (let num of nums) {
            if (num % 2) {
                odd.push(num);
            } else {
                even.push(num);
            }
        }
        let idx = 0;
        for (let e of even) {
            nums[idx++] = e;
        }
        for (let o of odd) {
            nums[idx++] = o;
        }
        return nums;
    }
}