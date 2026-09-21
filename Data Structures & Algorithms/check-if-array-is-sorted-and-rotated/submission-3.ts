class Solution {
    check(nums: number[]): boolean {
        let drops = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[(i + 1) % nums.length]) {
                drops++;
                if (drops > 1) return false;
            }
        }
        return true;
    }
}