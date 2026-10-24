class Solution {
    sumPrefixScores(words) {
        const prefixCount = new Map();

        for (const word of words) {
            let prefix = "";

            for (const ch of word) {
                prefix += ch;
                prefixCount.set(prefix, (prefixCount.get(prefix) || 0) + 1);
            }
        }

        const result = [];

        for (const word of words) {
            let prefix = "";
            let score = 0;

            for (const ch of word) {
                prefix += ch;
                score += prefixCount.get(prefix);
            }

            result.push(score);
        }

        return result;
    }
}