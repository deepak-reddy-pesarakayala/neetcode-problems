class Solution {
    frequencySort(nums: number[]): number[] {
        const freq = new Map<number, number>();
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const fi = freq.get(nums[i])!;
                const fj = freq.get(nums[j])!;
                if (fi > fj || (fi === fj && nums[i] < nums[j])) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                }
            }
        }
        return nums;
    }
}