class Solution {
    longestPalindrome(s: string): number {
        const count = new Map<string, number>();
        for (const ch of s) {
            count.set(ch, (count.get(ch) || 0) + 1);
        }
        let result = 0;
        let hasOdd = false;
        for (const frequency of count.values()) {
            result += Math.floor(frequency / 2) * 2;
            if (frequency % 2 === 1) {
                hasOdd = true;
            }
        }
        if (hasOdd) result++;
        return result;
    }
}