class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = [];
        let i = 0,
            j = 0;
        while (i < word1.length && j < word2.length) {
            res.push(word1[i++], word2[j++]);
        }
        res.push(word1.slice(i));
        res.push(word2.slice(j));
        return res.join('');
    }
}