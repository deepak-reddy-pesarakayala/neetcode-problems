class Solution {
    vowelStrings(words: string[], queries: number[][]): number[] {
        const vowels = new Set(["a", "e", "i", "o", "u"]);
        const prefix: number[] = [0];
        for (const word of words) {
            const first = word[0];
            const last = word[word.length - 1];
            prefix.push(prefix[prefix.length - 1] + (vowels.has(first) && vowels.has(last) ? 1 : 0));
        }
        const ans: number[] = [];
        for (const [l, r] of queries) {
            ans.push(prefix[r + 1] - prefix[l]);
        }
        return ans;
    }
}