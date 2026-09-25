class Solution {
    commonChars(words: string[]): string[] {
        const minCount = new Array(26).fill(Infinity);
        for (const word of words) {
            const count = new Array(26).fill(0);
            for (const ch of word) {
                count[ch.charCodeAt(0) - 97]++;
            }
            for (let i = 0; i < 26; i++) {
                minCount[i] = Math.min(minCount[i], count[i]);
            }
        }
        const result: string[] = [];
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < minCount[i]; j++) {
                result.push(String.fromCharCode(97 + i));
            }
        }
        return result;
    }
}