class Solution {
    minSubarray(nums: number[], p: number): number {
        let total = 0;
        for (const num of nums) {
            total = (total + num) % p;
        }
        if (total === 0) return 0;
        const map = new Map<number, number>();
        map.set(0, -1);
        let prefix = 0;
        let answer = nums.length;
        for (let i = 0; i < nums.length; i++) {
            prefix = (prefix + nums[i]) % p;
            const needed = (prefix - total + p) % p;
            if (map.has(needed)) {
                answer = Math.min(answer, i - map.get(needed)!);
            }
            map.set(prefix, i);
        }
        return answer === nums.length ? -1 : answer;
    }
}