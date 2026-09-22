class Solution {
    divideArray(nums: number[]): boolean {
        const count = new Array(501).fill(0);
        for (const num of nums) {
            count[num]++;
        }
        for (let i = 1; i <= 500; i++) {
            if (count[i] % 2 !== 0) {
                return false;
            }
        }
        return true;
    }
}