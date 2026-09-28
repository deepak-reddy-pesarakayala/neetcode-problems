class Solution {
    rearrangeArray(nums: number[]): number[] {
        const result: number[] = new Array(nums.length);
        let positive = 0;
        let negative = 1;
        for (const num of nums) {
            if (num > 0) {
                result[positive] = num;
                positive += 2;
            } else {
                result[negative] = num;
                negative += 2;
            }
        }
        return result;
    }
}