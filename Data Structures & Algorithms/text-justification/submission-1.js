class Solution {
    /**
     * @param {string[]} words
     * @param {number} maxWidth
     * @return {string[]}
     */
    fullJustify(words, maxWidth) {
        const result = [];
        let i = 0;
        while (i < words.length) {
            let j = i;
            let lineLength = 0;
            while (
                j < words.length &&
                lineLength + words[j].length + (j - i) <= maxWidth
            ) {
                lineLength += words[j].length;
                j++;
            }
            const numWords = j - i;
            const spacesNeeded = maxWidth - lineLength;
            let line = "";
            if (j === words.length || numWords === 1) {
                line = words.slice(i, j).join(" ");
                line += " ".repeat(maxWidth - line.length);
            } else {
                const gaps = numWords - 1;
                const evenSpaces = Math.floor(spacesNeeded / gaps);
                const extraSpaces = spacesNeeded % gaps;
                for (let k = i; k < j; k++) {
                    line += words[k];
                    if (k < j - 1) {
                        const spaces =
                            evenSpaces + (k - i < extraSpaces ? 1 : 0);
                        line += " ".repeat(spaces);
                    }
                }
            }
            result.push(line);
            i = j;
        }
        return result;
    }
}