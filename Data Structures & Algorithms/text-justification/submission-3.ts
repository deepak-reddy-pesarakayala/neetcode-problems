class Solution {
    fullJustify(words: string[], maxWidth: number): string[] {
        const result: string[] = [];
        let i = 0;
        while (i < words.length) {
            let j = i;
            let length = 0;
            while (j < words.length && length + words[j].length + (j - i) <= maxWidth) {
                length += words[j].length;
                j++;
            }
            const count = j - i;
            const spaces = maxWidth - length;
            let line = "";
            if (j === words.length || count === 1) {
                for (let k = i; k < j; k++) {
                    if (k > i) line += " ";
                    line += words[k];
                }
                line += " ".repeat(maxWidth - line.length);
            } else {
                const gaps = count - 1;
                const base = Math.floor(spaces / gaps);
                const extra = spaces % gaps;
                for (let k = i; k < j; k++) {
                    line += words[k];
                    if (k < j - 1) {
                        line += " ".repeat(base + (k - i < extra ? 1 : 0));
                    }
                }
            }
            result.push(line);
            i = j;
        }
        return result;
    }
}