class Solution {
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;
        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);
        for (const ch of s1) count1[ch.charCodeAt(0) - 97]++;
        for (let i = 0; i < s2.length; i++) {
            count2[s2.charCodeAt(i) - 97]++;
            if (i >= s1.length) count2[s2.charCodeAt(i - s1.length) - 97]--;
            if (i >= s1.length - 1 && count1.every((v, j) => v === count2[j])) return true;
        }
        return false;
    }
}