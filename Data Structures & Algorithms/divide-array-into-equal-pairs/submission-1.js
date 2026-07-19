class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const frequency = new Array(501).fill(0);
        for (const num of nums) {
            frequency[num]++;
        }
        for (const count of frequency) {
            if (count % 2 !== 0) {
                return false;
            }
        }
        return true;
    }
}