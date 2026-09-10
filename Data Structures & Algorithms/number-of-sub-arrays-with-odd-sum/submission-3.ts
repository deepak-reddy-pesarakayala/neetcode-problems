class Solution {
    numOfSubarrays(arr: number[]): number {
        const MOD = 1000000007;
        let even = 1;
        let odd = 0;
        let prefix = 0;
        let result = 0;
        for (const num of arr) {
            prefix = (prefix + num) % 2;
            if (prefix === 0) {
                result = (result + odd) % MOD;
                even++;
            } else {
                result = (result + even) % MOD;
                odd++;
            }
        }
        return result;
    }
}