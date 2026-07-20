class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words) {
        const frequency = new Array(26).fill(0);
        for (const word of words) {
            for (const ch of word) {
                frequency[ch.charCodeAt(0) - 97]++;
            }
        }
        const numberOfWords = words.length;
        for (const count of frequency) {
            if (count % numberOfWords !== 0) {
                return false;
            }
        }
        return true;
    }
}