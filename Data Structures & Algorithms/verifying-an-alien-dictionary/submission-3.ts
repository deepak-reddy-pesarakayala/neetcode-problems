class Solution {
    isAlienSorted(words: string[], order: string): boolean {
        const rank = new Array(26).fill(0);

        for (let i = 0; i < order.length; i++) {
            rank[order.charCodeAt(i) - 97] = i;
        }

        for (let i = 0; i < words.length - 1; i++) {
            const word1 = words[i];
            const word2 = words[i + 1];

            let j = 0;
            const len = Math.min(word1.length, word2.length);

            while (j < len) {
                const c1 = rank[word1.charCodeAt(j) - 97];
                const c2 = rank[word2.charCodeAt(j) - 97];

                if (c1 < c2) break;

                if (c1 > c2) return false;

                j++;
            }

            if (j === len && word1.length > word2.length) {
                return false;
            }
        }

        return true;
    }
}