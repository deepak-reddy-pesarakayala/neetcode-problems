class Solution {
    findErrorNums(nums: number[]): number[] {
        const count = new Array(nums.length + 1).fill(0);
        let duplicate = -1;
        let missing = -1;
        for (const num of nums) {
            count[num]++;
            if (count[num] === 2) {
                duplicate = num;
            }
        }
        for (let i = 1; i <= nums.length; i++) {
            if (count[i] === 0) {
                missing = i;
                break;
            }
        }
        return [duplicate, missing];
    }
}