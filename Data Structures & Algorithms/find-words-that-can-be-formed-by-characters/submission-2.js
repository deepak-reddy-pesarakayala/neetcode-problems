class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        const available = new Array(26).fill(0);
        for (const ch of chars) {
            available[ch.charCodeAt(0) - 97]++;
        }
        let totalLength = 0;
        for (const word of words) {
            const required = new Array(26).fill(0);
            let canForm = true;
            for (const ch of word) {
                const index = ch.charCodeAt(0) - 97;
                required[index]++;
                if (required[index] > available[index]) {
                    canForm = false;
                    break;
                }
            }
            if (canForm) {
                totalLength += word.length;
            }
        }
        return totalLength;
    }
}