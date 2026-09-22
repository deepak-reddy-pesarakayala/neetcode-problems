class Solution {
    numIdenticalPairs(nums: number[]): number {
        const count = new Map<number, number>();
        let result = 0;
        for (const num of nums) {
            const frequency = count.get(num) || 0;
            result += frequency;
            count.set(num, frequency + 1);
        }
        return result;
    }
}