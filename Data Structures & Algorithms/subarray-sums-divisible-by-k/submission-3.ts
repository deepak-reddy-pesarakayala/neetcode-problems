class Solution {
    subarraysDivByK(nums: number[], k: number): number {
        const count = new Array(k).fill(0);
        count[0] = 1;
        let sum = 0;
        let result = 0;
        for (const num of nums) {
            sum += num;
            let remainder = sum % k;
            if (remainder < 0) remainder += k;
            result += count[remainder];
            count[remainder]++;
        }
        return result;
    }
}