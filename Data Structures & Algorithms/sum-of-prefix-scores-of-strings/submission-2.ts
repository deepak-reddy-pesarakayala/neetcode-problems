class Solution {
    sumPrefixScores(words: string[]): number[] {
        const count = new Map<string, number>();

        for (const word of words) {
            let prefix = "";
            for (const ch of word) {
                prefix += ch;
                count.set(prefix, (count.get(prefix) || 0) + 1);
            }
        }

        const result: number[] = [];

        for (const word of words) {
            let prefix = "";
            let score = 0;

            for (const ch of word) {
                prefix += ch;
                score += count.get(prefix)!;
            }

            result.push(score);
        }

        return result;
    }
}