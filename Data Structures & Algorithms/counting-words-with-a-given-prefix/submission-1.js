class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */
    prefixCount(words, pref) {
        let count = 0;
        for (const word of words) {
            if (word.startsWith(pref)) {
                count++;
            }
        }
        return count;
    }
}