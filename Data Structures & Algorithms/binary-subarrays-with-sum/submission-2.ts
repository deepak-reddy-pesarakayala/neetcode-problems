class Solution {
    numSubarraysWithSum(nums: number[], goal: number): number {
        const count = new Map<number, number>();
        count.set(0, 1);
        let sum = 0;
        let result = 0;
        for (const num of nums) {
            sum += num;
            result += count.get(sum - goal) || 0;
            count.set(sum, (count.get(sum) || 0) + 1);
        }
        return result;
    }
}