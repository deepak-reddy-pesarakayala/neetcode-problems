class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {
        const n = nums.length;
        const frequency = new Array(n + 1).fill(0);
        for (const num of nums) {
            frequency[num]++;
        }
        let duplicate = -1;
        let missing = -1;
        for (let i = 1; i <= n; i++) {
            if (frequency[i] === 2) {
                duplicate = i;
            } else if (frequency[i] === 0) {
                missing = i;
            }
        }
        return [duplicate, missing];
    }
}