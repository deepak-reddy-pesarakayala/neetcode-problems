class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const words = new Set(wordDict);
        const memo = new Map();
        const dfs = (start) => {
            if (start === s.length) {
                return [""];
            }
            if (memo.has(start)) {
                return memo.get(start);
            }
            const sentences = []
            for (let end = start + 1; end <= s.length; end++) {
                const word = s.slice(start, end);
                if (!words.has(word)) {
                    continue;
                }
                const remainingSentences = dfs(end);
                for (const remaining of remainingSentences) {
                    if (remaining === "") {
                        sentences.push(word);
                    } else {
                        sentences.push(word + " " + remaining);
                    }
                }
            }

            memo.set(start, sentences);
            return sentences;
        };

        return dfs(0);
    }
}