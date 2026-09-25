class Solution {
    specialArray(nums: number[]): number {
        for (let x = 0; x <= nums.length; x++) {
            let count = 0;
            for (const num of nums) {
                if (num >= x) count++;
            }
            if (count === x) return x;
        }
        return -1;
    }
}