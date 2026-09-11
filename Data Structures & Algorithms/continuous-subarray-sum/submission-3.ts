class Solution {
    checkSubarraySum(nums: number[], k: number): boolean {
        const map = new Map<number, number>();
        map.set(0, -1);
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum = (sum + nums[i]) % k;
            if (map.has(sum)) {
                if (i - map.get(sum)! >= 2) return true;
            } else {
                map.set(sum, i);
            }
        }
        return false;
    }
}