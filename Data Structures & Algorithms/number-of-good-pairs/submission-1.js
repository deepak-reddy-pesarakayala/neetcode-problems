class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        const frequency = new Array(101).fill(0);
        let pairs = 0;
        for (const num of nums) {
            pairs += frequency[num];
            frequency[num]++;
        }
        return pairs;
    }
}