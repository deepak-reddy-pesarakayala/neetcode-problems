class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    commonChars(words) {
        const minFreq = new Array(26).fill(Infinity);
        for (const word of words) {
            const freq = new Array(26).fill(0);
            for (const ch of word) {
                freq[ch.charCodeAt(0) - 97]++;
            }
            for (let i = 0; i < 26; i++) {
                minFreq[i] = Math.min(minFreq[i], freq[i]);
            }
        }
        const result = [];
        for (let i = 0; i < 26; i++) {
            while (minFreq[i] > 0) {
                result.push(String.fromCharCode(i + 97));
                minFreq[i]--;
            }
        }
        return result;
    }
}