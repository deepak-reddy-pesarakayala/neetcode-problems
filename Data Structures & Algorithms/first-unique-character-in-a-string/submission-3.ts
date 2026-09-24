class Solution {
    firstUniqChar(s: string): number {
        const count = new Array(26).fill(0);
        for (const ch of s) {
            count[ch.charCodeAt(0) - 97]++;
        }
        for (let i = 0; i < s.length; i++) {
            if (count[s.charCodeAt(i) - 97] === 1) {
                return i;
            }
        }
        return -1;
    }
}