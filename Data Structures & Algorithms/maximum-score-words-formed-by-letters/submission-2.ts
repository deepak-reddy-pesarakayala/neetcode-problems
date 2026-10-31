class Solution {
    maxScoreWords(words: string[], letters: string[], score: number[]): number {
        const freq: number[] = new Array(26).fill(0);

        for (const ch of letters) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        const backtrack = (index: number): number => {
            if (index === words.length) {
                return 0;
            }

            let maxScore = backtrack(index + 1);

            const wordFreq: number[] = new Array(26).fill(0);
            let wordScore = 0;
            let valid = true;

            for (const ch of words[index]) {
                const id = ch.charCodeAt(0) - 97;
                wordFreq[id]++;
                wordScore += score[id];

                if (wordFreq[id] > freq[id]) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                for (let i = 0; i < 26; i++) {
                    freq[i] -= wordFreq[i];
                }

                maxScore = Math.max(
                    maxScore,
                    wordScore + backtrack(index + 1)
                );

                for (let i = 0; i < 26; i++) {
                    freq[i] += wordFreq[i];
                }
            }

            return maxScore;
        };

        return backtrack(0);
    }
}