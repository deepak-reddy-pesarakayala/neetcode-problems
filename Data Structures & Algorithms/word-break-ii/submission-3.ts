class Solution {
    wordBreak(s: string, wordDict: string[]): string[] {
        const set = new Set(wordDict);
        const memo = new Map<number, string[]>();

        const backtrack = (start: number): string[] => {
            if (start === s.length) {
                return [""];
            }

            if (memo.has(start)) {
                return memo.get(start)!;
            }

            const result: string[] = [];

            for (let end = start + 1; end <= s.length; end++) {
                const word = s.substring(start, end);

                if (set.has(word)) {
                    const remaining = backtrack(end);

                    for (const sentence of remaining) {
                        if (sentence === "") {
                            result.push(word);
                        } else {
                            result.push(word + " " + sentence);
                        }
                    }
                }
            }

            memo.set(start, result);
            return result;
        };

        return backtrack(0);
    }
}