class Solution {
    wordPattern(pattern: string, s: string): boolean {
        const words = s.split(" ");
        if (pattern.length !== words.length) return false;
        const mapPattern = new Map<string, string>();
        const mapWord = new Map<string, string>();
        for (let i = 0; i < pattern.length; i++) {
            const ch = pattern[i];
            const word = words[i];
            if (mapPattern.has(ch) && mapPattern.get(ch) !== word) return false;
            if (mapWord.has(word) && mapWord.get(word) !== ch) return false;
            mapPattern.set(ch, word);
            mapWord.set(word, ch);
        }
        return true;
    }
}