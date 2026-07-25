class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    findAllConcatenatedWordsInADict(words) {
        const wordSet = new Set(words);
        const memo = new Map();
        function canForm(word) {
            if (memo.has(word)) return memo.get(word);
            for (let i = 1; i < word.length; i++) {
                const prefix = word.slice(0, i);
                const suffix = word.slice(i);
                if (wordSet.has(prefix)) {
                    if (wordSet.has(suffix) || canForm(suffix)) {
                        memo.set(word, true);
                        return true;
                    }
                }
            }
            memo.set(word, false);
            return false;
        }
        const result = [];
        for (const word of words) {
            if (canForm(word)) {
                result.push(word);
            }
        }
        return result;
    }
}