class Solution {
    countCharacters(words: string[], chars: string): number {
        const count = new Array(26).fill(0);
        for (const ch of chars) {
            count[ch.charCodeAt(0) - 97]++;
        }
        let result = 0;
        for (const word of words) {
            const used = new Array(26).fill(0);
            let valid = true;
            for (const ch of word) {
                const index = ch.charCodeAt(0) - 97;
                used[index]++;
                if (used[index] > count[index]) {
                    valid = false;
                    break;
                }
            }
            if (valid) result += word.length;
        }
        return result;
    }
}