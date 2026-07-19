class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const count = new Array(26).fill(0);
        for (const ch of magazine) {
            count[ch.charCodeAt(0) - 97]++;
        }
        for (const ch of ransomNote) {
            const index = ch.charCodeAt(0) - 97;
            if (count[index] === 0) {
                return false;
            }
            count[index]--;
        }
        return true;
    }
}