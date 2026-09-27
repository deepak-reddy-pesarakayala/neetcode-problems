class Solution {
    countPalindromicSubsequence(s: string): number {
        const first = new Array(26).fill(-1);
        const last = new Array(26).fill(-1);
        for (let i = 0; i < s.length; i++) {
            const index = s.charCodeAt(i) - 97;
            if (first[index] === -1) first[index] = i;
            last[index] = i;
        }
        let result = 0;
        for (let i = 0; i < 26; i++) {
            if (first[i] === -1 || first[i] === last[i]) continue;
            const seen = new Set<string>();
            for (let j = first[i] + 1; j < last[i]; j++) {
                seen.add(s[j]);
            }
            result += seen.size;
        }
        return result;
    }
}