class Solution {
    countPrefixSuffixPairs(words: string[]): number {
        const count = new Map<string, number>();
        let result = 0;

        for (const word of words) {
            const n = word.length;
            const pi = new Array(n).fill(0);

            for (let i = 1; i < n; i++) {
                let j = pi[i - 1];

                while (j > 0 && word[i] !== word[j]) {
                    j = pi[j - 1];
                }

                if (word[i] === word[j]) {
                    j++;
                }

                pi[i] = j;
            }

            const borders = new Set<number>();
            let len = n;

            while (len > 0) {
                borders.add(len);
                len = pi[len - 1];
            }

            for (const [prefix, amount] of count) {
                if (prefix.length <= n && borders.has(prefix.length) &&
                    word.startsWith(prefix) && word.endsWith(prefix)) {
                    result += amount;
                }
            }

            count.set(word, (count.get(word) || 0) + 1);
        }

        return result;
    }
}