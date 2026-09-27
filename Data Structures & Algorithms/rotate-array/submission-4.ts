class Solution {
    rotate(nums: number[], k: number): void {
        const n = nums.length;
        k %= n;
        this.reverse(nums, 0, n - 1);
        this.reverse(nums, 0, k - 1);
        this.reverse(nums, k, n - 1);
    }
    reverse(nums: number[], left: number, right: number): void {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
}