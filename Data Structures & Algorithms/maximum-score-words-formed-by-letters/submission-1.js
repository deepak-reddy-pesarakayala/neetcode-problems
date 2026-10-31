class Solution {
    maxScoreWords(words, letters, score) {
        const freq = new Array(26).fill(0);

        for (const ch of letters) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        const wordFreq = words.map(word => {
            const count = new Array(26).fill(0);

            for (const ch of word) {
                count[ch.charCodeAt(0) - 97]++;
            }

            return count;
        });

        const backtrack = (index) => {
            if (index === words.length) {
                return 0;
            }

            let maxScore = backtrack(index + 1);
            const count = wordFreq[index];
            let wordScore = 0;
            let valid = true;

            for (let i = 0; i < 26; i++) {
                if (count[i] > freq[i]) {
                    valid = false;
                    break;
                }

                wordScore += count[i] * score[i];
            }

            if (valid) {
                for (let i = 0; i < 26; i++) {
                    freq[i] -= count[i];
                }

                maxScore = Math.max(
                    maxScore,
                    wordScore + backtrack(index + 1)
                );

                for (let i = 0; i < 26; i++) {
                    freq[i] += count[i];
                }
            }

            return maxScore;
        };

        return backtrack(0);
    }
}