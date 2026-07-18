class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const rank = new Array(26);
        for (let i = 0; i < 26; i++) {
            rank[order.charCodeAt(i) - 97] = i;
        }
        for (let i = 0; i < words.length - 1; i++) {
            if (!this.inCorrectOrder(words[i], words[i + 1], rank)) {
                return false;
            }
        }
        return true;
    }
    inCorrectOrder(word1, word2, rank) {
        const len = Math.min(word1.length, word2.length);
        for (let i = 0; i < len; i++) {
            const c1 = rank[word1.charCodeAt(i) - 97];
            const c2 = rank[word2.charCodeAt(i) - 97];
            if (c1 < c2) return true;
            if (c1 > c2) return false;
        }
        return word1.length <= word2.length;
    }
}