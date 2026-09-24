class Solution {
    makeEqual(words: string[]): boolean {
        const count = new Array(26).fill(0);
        for (const word of words) {
            for (const ch of word) {
                count[ch.charCodeAt(0) - 97]++;
            }
        }
        const n = words.length;
        for (const value of count) {
            if (value % n !== 0) return false;
        }
        return true;
    }
}