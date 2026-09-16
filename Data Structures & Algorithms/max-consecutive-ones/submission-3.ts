class Solution {
    findMaxConsecutiveOnes(nums: number[]): number {
        let current = 0;
        let maximum = 0;
        for (const num of nums) {
            if (num === 1) {
                current++;
                maximum = Math.max(maximum, current);
            } else {
                current = 0;
            }
        }
        return maximum;
    }
}