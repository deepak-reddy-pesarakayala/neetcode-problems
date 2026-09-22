class Solution {
    countConsistentStrings(allowed: string, words: string[]): number {
        const set = new Set(allowed);
        let result = 0;
        for (const word of words) {
            let valid = true;
            for (const ch of word) {
                if (!set.has(ch)) {
                    valid = false;
                    break;
                }
            }
            if (valid) result++;
        }
        return result;
    }
}