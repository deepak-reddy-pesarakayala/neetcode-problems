class Solution {
    maxScore(s: string): number {
        let ones = 0;
        for (const ch of s) {
            if (ch === "1") ones++;
        }
        let zeros = 0;
        let result = 0;
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] === "0") {
                zeros++;
            } else {
                ones--;
            }
            result = Math.max(result, zeros + ones);
        }
        return result;
    }
}