class Solution {
    subarraysWithKDistinct(nums: number[], k: number): number {
        return this.atMost(nums, k) - this.atMost(nums, k - 1);
    }
    atMost(nums: number[], k: number): number {
        if (k === 0) return 0;
        const count = new Map<number, number>();
        let left = 0;
        let result = 0;
        for (let right = 0; right < nums.length; right++) {
            count.set(nums[right], (count.get(nums[right]) || 0) + 1);
            while (count.size > k) {
                count.set(nums[left], count.get(nums[left])! - 1);
                if (count.get(nums[left]) === 0) count.delete(nums[left]);
                left++;
            }
            result += right - left + 1;
        }
        return result;
    }
}