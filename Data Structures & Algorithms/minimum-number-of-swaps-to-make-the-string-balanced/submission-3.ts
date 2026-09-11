class Solution {
    minSwaps(s: string): number {
        let balance = 0;
        let minBalance = 0;
        for (const ch of s) {
            if (ch === '[') {
                balance++;
            } else {
                balance--;
            }
            minBalance = Math.min(minBalance, balance);
        }
        if (minBalance === 0) return 0;
        return Math.ceil(-minBalance / 2);
    }
}