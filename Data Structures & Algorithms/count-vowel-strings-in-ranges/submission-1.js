class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        const n = words.length;
        const prefix = new Array(n + 1).fill(0);
        for (let i = 0; i < n; i++) {
            const word = words[i];
            const isVowelString =
                vowels.has(word[0]) &&
                vowels.has(word[word.length - 1]);

            prefix[i + 1] = prefix[i] + (isVowelString ? 1 : 0);
        }
        const result = [];
        for (const [left, right] of queries) {
            result.push(prefix[right + 1] - prefix[left]);
        }
        return result;
    }
}