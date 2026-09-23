class Solution {
    canConstruct(ransomNote: string, magazine: string): boolean {
        const count = new Array(26).fill(0);
        for (const ch of magazine) {
            count[ch.charCodeAt(0) - 97]++;
        }
        for (const ch of ransomNote) {
            const index = ch.charCodeAt(0) - 97;
            count[index]--;
            if (count[index] < 0) return false;
        }
        return true;
    }
}